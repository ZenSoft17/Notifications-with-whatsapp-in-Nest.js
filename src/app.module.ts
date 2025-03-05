import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './modules/users/users.module'
import { GlobalModule } from './common/global/global.module'
import { NotificationsModule } from './modules/notifications/notifications.module'
import { UsersService } from './modules/users/users.service'
import { UsersRepository } from './modules/users/users.repository'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRootAsync({
			useFactory: async (configService: ConfigService) => ({
				uri: configService.get<string>('DB_URL'),
			}),
			inject: [ConfigService],
		}),
		UsersModule,
		GlobalModule,
		NotificationsModule,
	],
	controllers: [],
	providers: [UsersRepository, UsersService],
})
export class AppModule {}
