import { Injectable } from '@nestjs/common'
import axios from 'axios'
import Message from './bodys/message'
import MessageEntity from './entities/message.entity'

@Injectable()
export class NotificationsWhatsappService {
	private readonly apiUrl = 'https://graph.facebook.com/v22.0'
	private readonly phoneNumberId = process.env.META_ID
	private readonly accessToken = process.env.WHASTAPP_SECRET

	async sendMessage(data: Partial<MessageEntity>) {
		const mensaje = Message(data)

		try {
			const url = `${this.apiUrl}/${this.phoneNumberId}/messages`
			const response = await axios.post(
				url,
				{
					messaging_product: 'whatsapp',
					to: data.to,
					type: 'text',
					text: { body: mensaje },
				},
				{
					headers: {
						Authorization: `Bearer ${this.accessToken}`,
						'Content-Type': 'application/json',
					},
				}
			)
			return response.data
		} catch (error) {
			console.error(
				'Error sending WhatsApp message:',
				error.response?.data || error.message
			)
			throw error
		}
	}
}
