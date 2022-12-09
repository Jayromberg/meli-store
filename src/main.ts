import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.APP_PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(PORT), () => console.log(`Running on port ${PORT}`));
}
bootstrap();
