import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { CalcsService } from './calcs.service'

@Controller('notifications')
export class NotificationsController {
	constructor(private readonly calcsService: CalcsService) {}
	@Get()
	async send() {
		try {
			return await this.calcsService.sendNotifications()
		} catch (error) {
			throw new HttpException(
				error.message,
				error.status || HttpStatus.NOT_FOUND
			)
		}
	}
}
