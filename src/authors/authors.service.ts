import {Injectable} from '@nestjs/common';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {AppService} from '../app.service'


@Injectable()
export class AuthorsService {

  create(createAuthorDto: CreateAuthorDto) {
   return AppService.mysqlConnectionExec( `INSERT INTO author
    (name) VALUES ("${createAuthorDto.name}")`)
  }

  async findAll(){
    return AppService.mysqlConnectionExec('SELECT * from author')
  }

  findOne(id: number) {
    return AppService.mysqlConnectionExec(`SELECT * from author WHERE id=${id}`)
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return AppService.mysqlConnectionExec( `UPDATE author
    SET name = "${updateAuthorDto.name}"
    WHERE id = ${id}`)
  }

  remove(id: number) {
    return AppService.mysqlConnectionExec(`DELETE from author WHERE id=${id}`)
  }
}
