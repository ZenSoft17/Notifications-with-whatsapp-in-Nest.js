import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UsersEntity from './users.entity';

@Injectable()
export class UsersRepository {
	constructor(
		@InjectModel('users')
		private readonly usersModel: Model<UsersEntity>,
	) {}

  async createUser(data: UsersEntity) {
    return await new this.usersModel(data).save();
  }

  async findById(_id: string) {
    return await this.usersModel.findById(_id).exec();
  }

  async findAll() {
    return await this.usersModel.find().exec();
  }

  async updateUser(_id: string, data: Partial<UsersEntity>) {
    return await this.usersModel.findByIdAndUpdate(_id, data, { new: true }).exec();
  }

  async deleteUser(_id: string) {
    return await this.usersModel.findByIdAndDelete(_id).exec();
  }
}
