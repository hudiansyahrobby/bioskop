import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle('Bioskop API')
    .setDescription('API untuk bioskop')
    .setVersion('1.0')
    .setBasePath('/api/v1')
    .addBearerAuth()
    .build();

  // const connection = await createConnection();
  app.enableCors();
  // await connection.connect();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
