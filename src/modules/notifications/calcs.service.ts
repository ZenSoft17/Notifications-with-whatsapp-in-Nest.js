import { Injectable } from '@nestjs/common'
import { NotificationsEmailService } from './notifications.email.service'
import { NotificationsWhatsappService } from './notifications.whatsapp.service'
import { UsersService } from '../users/users.service'

@Injectable()
export class CalcsService {
	constructor(
		private readonly notificationsEmailService: NotificationsEmailService,
		private readonly notificationsWhatsappService: NotificationsWhatsappService,
		private readonly usersService: UsersService
	) {}

	async sendNotifications() {

	}
}
