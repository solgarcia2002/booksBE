"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Books and Authors')
        .setDescription('The books and authors application description')
        .setVersion('1.0')
        .addTag('authors')
        .addTag('books')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const mysql = require("mysql");
    exports.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Cata2015.",
        database: "books"
    });
    exports.connection.connect((err) => {
        if (err) {
            console.log("Error occurred", err);
        }
        else {
            console.log("Connected to MySQL Server");
        }
    });
    await app.listen(process.env.PORT || 3010);
}
bootstrap();
//# sourceMappingURL=main.js.map