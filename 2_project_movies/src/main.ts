import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사용 파이프 (=미들웨어)
  // ValidationPipe : whitelist, forbidNonWhitelisted
  // (기본적으로 request로 받은거 string 타입) -> transform으로 내가 원하는 타입으로 변환해서 넘겨줌.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
