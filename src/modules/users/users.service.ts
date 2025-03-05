import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UsersRepository } from './users.repository';
import UsersEntity from './users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: Partial<UsersEntity>) {
    const user: UsersEntity = {
      _id: uuidv4(),
      name: data.name,
      days: data.days,
      start_date: data.start_date,
      end_date: data.end_date,
    };

    const existingUser = await this.usersRepository.findById(user._id);
    if (existingUser) throw new ConflictException('User already exists');

    return this.usersRepository.createUser(user);
  }

  async findById(_id: string) {
    const user = await this.usersRepository.findById(_id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findAll();
    if (!users.length) throw new NotFoundException('No users found');
    return users;
  }

  async updateUser(_id: string, data: Partial<UsersEntity>) {
    const updatedUser = await this.usersRepository.updateUser(_id, data);
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }

  async deleteUser(_id: string) {
    const deletedUser = await this.usersRepository.deleteUser(_id);
    if (!deletedUser) throw new NotFoundException('User not found');
    return { message: 'User deleted successfully' };
  }
}
