import { Module } from '@nestjs/common'
import { CalcsService } from './calcs.service'
import { NotificationsWhatsappService } from './notifications.whatsapp.service'
import { NotificationsEmailService } from './notifications.email.service'
import { UsersModule } from '../users/users.module'
import { GlobalModule } from 'src/common/global/global.module'
import { NotificationsController } from './notifications.controller';

@Module({
	imports: [UsersModule, GlobalModule],
	providers: [
		NotificationsWhatsappService,
		CalcsService,
		NotificationsEmailService,
	],
	exports : [CalcsService],
	controllers: [NotificationsController]
})
export class NotificationsModule {}
