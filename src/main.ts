import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
export let connection
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Books and Authors')
    .setDescription('The books and authors application description')
    .setVersion('1.0')
    .addTag('authors')
    .addTag('books')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  const mysql = require("mysql")

  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cata2015.",
    database: "books"
  });

  connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to MySQL Server");
    }
  });

  app.enableCors();

  await app.listen(process.env.PORT || 3010)
}
bootstrap();
