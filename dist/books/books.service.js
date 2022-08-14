"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let BooksService = class BooksService {
    create(createBookDto) {
        return app_service_1.AppService.mysqlConnectionExec(`INSERT INTO book
    (name, description, authorid) VALUES ("${createBookDto.name}", "${createBookDto.description}", "${createBookDto.authorId}")`);
    }
    findAll() {
        return app_service_1.AppService.mysqlConnectionExec('SELECT book.id, book.name, book.description, author.name AS authorName FROM book INNER JOIN author ON author.id= book.authorid');
    }
    findOne(id) {
        return app_service_1.AppService.mysqlConnectionExec(`SELECT * from book WHERE id=${id}`);
    }
    update(id, updateBookDto) {
        return app_service_1.AppService.mysqlConnectionExec(`UPDATE book
    SET name = "${updateBookDto.name}", description= "${updateBookDto.description}", authorid="${updateBookDto.authorId}"
    WHERE id = ${id}`);
    }
    remove(id) {
        return app_service_1.AppService.mysqlConnectionExec(`DELETE from book WHERE id=${id}`);
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map