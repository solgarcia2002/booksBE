"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let AuthorsService = class AuthorsService {
    create(createAuthorDto) {
        return app_service_1.AppService.mysqlConnectionExec(`INSERT INTO author
    (name) VALUES ("${createAuthorDto.name}")`);
    }
    async findAll() {
        return app_service_1.AppService.mysqlConnectionExec('SELECT * from author');
    }
    findOne(id) {
        return app_service_1.AppService.mysqlConnectionExec(`SELECT * from author WHERE id=${id}`);
    }
    update(id, updateAuthorDto) {
        return app_service_1.AppService.mysqlConnectionExec(`UPDATE author
    SET name = "${updateAuthorDto.name}"
    WHERE id = ${id}`);
    }
    remove(id) {
        return app_service_1.AppService.mysqlConnectionExec(`DELETE from author WHERE id=${id}`);
    }
};
AuthorsService = __decorate([
    (0, common_1.Injectable)()
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map