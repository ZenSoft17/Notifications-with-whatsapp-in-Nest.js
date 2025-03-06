import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'

const server = express()

async function bootstrap() {
	const app = await NestFactory.create(AppModule, new ExpressAdapter(server))

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		})
	)

	await app.init()
}

bootstrap()

export default server
