import MessageEntity from "../entities/message.entity"

const Message = (data: Partial<MessageEntity>): string => {
	if (data.days > 0) {
		return `Hola ${data.name}, te recordamos que faltan ${data.days} días para que tu mensualidad venza el ${data.end_date}.`
	} else if (data.days === 0) {
		return `Hola ${data.name}, tu mensualidad vence hoy (${data.end_date}). No olvides realizar tu pago.`
	} else {
		return `Hola ${data.name}, tu mensualidad venció el ${data.end_date}. Te invitamos a regularizar tu pago lo antes posible.`
	}
}

export default Message
