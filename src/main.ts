import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './AppModule';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });
  app.setGlobalPrefix('api');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Organiser API')
    .setContact('Beth Wright', undefined, 'bethwright95@ymail.com')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.APP_PORT || 3001);
}
bootstrap();
