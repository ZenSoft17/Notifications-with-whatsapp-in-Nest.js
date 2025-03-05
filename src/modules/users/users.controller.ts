import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	HttpException,
	HttpStatus,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto, UpdateUserDto } from './users.dto'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto) {
		try {
			return await this.usersService.createUser(createUserDto)
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.BAD_REQUEST
			)
		}
	}

	@Get(':id')
	async findById(@Param('id') id: string) {
		try {
			return await this.usersService.findById(id)
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.NOT_FOUND
			)
		}
	}

	@Get()
	async findAll() {
		try {
			return await this.usersService.findAll()
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.NOT_FOUND
			)
		}
	}

	@Put(':id')
	async updateUser(
		@Param('id') id: string,
		@Body() updateUserDto: UpdateUserDto
	) {
		try {
			return await this.usersService.updateUser(id, updateUserDto)
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.NOT_FOUND
			)
		}
	}

	@Delete(':id')
	async deleteUser(@Param('id') id: string) {
		try {
			return await this.usersService.deleteUser(id)
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.NOT_FOUND
			)
		}
	}
}
