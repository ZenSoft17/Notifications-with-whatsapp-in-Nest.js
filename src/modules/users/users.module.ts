import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './users.schema';
import { GlobalModule } from 'src/common/global/global.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
    GlobalModule
  ],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersRepository, UsersService], 
})
export class UsersModule {}
