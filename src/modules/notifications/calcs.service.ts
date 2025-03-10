import { Injectable } from '@nestjs/common'
import { NotificationsEmailService } from './notifications.email.service'
import { NotificationsWhatsappService } from './notifications.whatsapp.service'
import { UsersService } from '../users/users.service'
import MessageEntity from './entities/message.entity'
import { DateService } from 'src/common/global/services/date.service'
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class CalcsService  {
	constructor(
		private readonly notificationsEmailService: NotificationsEmailService,
		private readonly notificationsWhatsappService: NotificationsWhatsappService,
		private readonly usersService: UsersService,
		private readonly dateService: DateService
	) {}

	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) // @Cron('*/60 * * * * *') // Ejecuta cada 10 segundos (para pruebas) 
	async sendNotifications() {
		const users = await this.usersService.findAll()
		const currentDate = new Date(
			this.dateService.getMongoDate().toISOString().split('T')[0]
		)

		users.forEach((user) => {
			const endDate = new Date(user.end_date)
			const diffDays = Math.floor(
				(endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
			)

			let message = ''

			if (diffDays === 3) {
				message = `Hola ${user.name}, tu suscripción vencerá en 3 días. ¡Renueva a tiempo!`
			} else if (diffDays === 0) {
				message = `Hola ${user.name}, tu suscripción vence hoy. ¡No olvides renovarla!`
			} else if (diffDays === -7) {
				message = `Hola ${user.name}, hace 7 días venció tu suscripción. ¿Necesitas ayuda para renovarla?`
			}

			if (message) {
				const email: MessageEntity = {
					to: user.email,
					subject: 'Recordatorio de Suscripción',
					name: user.name,
					days: user.days,
					end_date: user.end_date,
					message: message,
				}

				const whatsapp: MessageEntity = {
					to: user.phone,
					subject: 'Recordatorio de Suscripción',
					name: user.name,
					days: user.days,
					end_date: user.end_date,
					message: message,
				}

				if (message) {
					try {
						this.notificationsEmailService.sendEmail(email)
					} catch (error) {
						console.error('Email error', error)
					}

					try {
						this.notificationsWhatsappService.sendMessage(whatsapp)
					} catch (error) {
						console.error('Whatsapp error', error)
					}
				}
			}
		})
	}
}
