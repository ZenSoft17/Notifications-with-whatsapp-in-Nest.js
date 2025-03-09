import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import { emailBody } from './bodys/email.message'
import MessageEntity from './entities/message.entity'

@Injectable()
export class NotificationsEmailService {
	private resend = new Resend(process.env.RESEND_API_KEY)

	async sendEmail(data: MessageEntity) {
		if (!data.to) throw new Error('Invalid email recipient')

		const { error } = await this.resend.emails.send({
			from: process.env.RESEND_EMAIL,
			to: [data.to],
			subject: data.subject,
			html: emailBody(data),
		})

		if (error) throw new Error(error.message)

		return { message: 'Email sent successfully' }
	}
}
