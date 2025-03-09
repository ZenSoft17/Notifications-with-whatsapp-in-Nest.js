import { Module } from '@nestjs/common'
import { CalcsService } from './calcs.service'
import { NotificationsWhatsappService } from './notifications.whatsapp.service'
import { NotificationsEmailService } from './notifications.email.service'
import { UsersModule } from '../users/users.module'

@Module({
	imports: [UsersModule],
	providers: [
		NotificationsWhatsappService,
		CalcsService,
		NotificationsEmailService,
	],
})
export class NotificationsModule {}
