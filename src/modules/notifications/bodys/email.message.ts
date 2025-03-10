import MessageEntity from '../entities/message.entity'

export function emailBody(data: MessageEntity): string {

	return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aviso de Vencimiento</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #ffffff;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <tr>
                <td style="padding: 30px 25px; border-top: 4px solid #ff0000;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <!-- Encabezado -->
                        <tr>
                            <td>
                                <h1 style="margin: 0 0 20px 0; font-size: 24px; color: #ff0000; font-weight: 700; letter-spacing: -0.5px;">Aviso de Vencimiento</h1>
                            </td>
                        </tr>
                        
                        <!-- Contenido principal -->
                        <tr>
                            <td style="padding: 20px 0; border-top: 1px solid #eeeeee; border-bottom: 1px solid #eeeeee;">
                                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #333333;">Hola <strong style="color: #000000;">${data.name}</strong>,</p>
                                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #333333;">${data.message}</p>
                                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #333333;">Para evitar <span style="color: #ff0000; font-weight: bold;">interrupciones en tu servicio</span>, te recomendamos realizar el pago lo antes posible.</p>
                            </td>
                        </tr>
                        
                        <!-- Llamada a la acción -->
                        <tr>
                            <td style="padding: 20px 0;">
                                <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #ff0000; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px; text-align: center;">Realizar Pago</a>
                            </td>
                        </tr>
                        
                        <!-- Despedida -->
                        <tr>
                            <td>
                                <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5; color: #333333;">Gracias por tu confianza.</p>
                            </td>
                        </tr>
                        
                        <!-- Pie de página -->
                        <tr>
                            <td style="padding-top: 30px; border-top: 1px solid #eeeeee;">
                                <p style="margin: 0; font-size: 12px; color: #777777;">Este es un mensaje automático. No respondas a este correo.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `
}
