import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  await app.init();

  server.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
  });
}
// vercel --prod --scope zensoft17s-projects
bootstrap();

export default server;
