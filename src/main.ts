import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Configuration CORS
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET, HEAD, PATCH, POST, PUT, DELETE',
    credentials: true
  })

  await app.listen(3000);
}
bootstrap();
