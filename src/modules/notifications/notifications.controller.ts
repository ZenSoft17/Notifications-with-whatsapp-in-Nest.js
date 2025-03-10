import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { CalcsService } from './calcs.service'

@Controller('notifications')
export class NotificationsController {
	constructor(private readonly calcsService: CalcsService) {}

	@Get()
	async send() {
		try {
			const result = await this.calcsService.sendNotifications()
			return {
				message: result.message,
				status: result.status,
			}
		} catch (error) {
			throw new HttpException(
				{
					message: error.response?.message || 'Error al enviar notificaciones',
					details: error.response?.error || error.message,
				},
				error.status || HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
	}
}
