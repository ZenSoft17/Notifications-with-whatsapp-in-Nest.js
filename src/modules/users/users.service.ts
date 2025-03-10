import {
	Injectable,
	NotFoundException,
	ConflictException,
} from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { UsersRepository } from './users.repository'
import UsersEntity from './users.entity'
import { DateService } from 'src/common/global/services/date.service'
import { CreateUserDto, UpdateUserDto } from './users.dto'

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRepository: UsersRepository,
		private readonly dateService: DateService
	) {}

	async createUser(data: CreateUserDto) {
		const user: UsersEntity = {
			_id: uuidv4(),
			name: data.name,
			phone: data.name,
			email: data.email,
			days: data.days,
			start_date: this.dateService.getMongoDate(),
			end_date: this.dateService.formatToMongoDate(data.end_date),
		}

		const existingUser = await this.usersRepository.findById(user._id)
		if (existingUser) throw new ConflictException('User already exists')

		return this.usersRepository.createUser(user)
	}

	async findById(_id: string) {
		const user = await this.usersRepository.findById(_id)
		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async findAll() {
		const users = await this.usersRepository.findAll()
		return users
	}

	async updateUser(_id: string, data: UpdateUserDto) {
		const user: Partial<UsersEntity> = {
			...data,
			end_date: this.dateService.formatToMongoDate(data.end_date),
		}
		const updatedUser = await this.usersRepository.updateUser(_id, user)
		if (!updatedUser) throw new NotFoundException('User not found')
		return updatedUser
	}

	async deleteUser(_id: string) {
		const deletedUser = await this.usersRepository.deleteUser(_id)
		if (!deletedUser) throw new NotFoundException('User not found')
		return { message: 'User deleted successfully' }
	}
}
