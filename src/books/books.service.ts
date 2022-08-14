import {Injectable} from '@nestjs/common';
import {CreateBookDto} from './dto/create-book.dto';
import {UpdateBookDto} from './dto/update-book.dto';
import {AppService} from '../app.service'

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return AppService.mysqlConnectionExec(`INSERT INTO book
    (name, description, authorid) VALUES ("${createBookDto.name}", "${createBookDto.description}", "${createBookDto.authorId}")`)
  }

  findAll() {
    return AppService.mysqlConnectionExec('SELECT book.id, book.name, book.description, author.name AS authorName FROM book INNER JOIN author ON author.id= book.authorid')
  }

  findOne(id: number) {
    return AppService.mysqlConnectionExec(`SELECT book.id, book.name, book.description, author.name AS authorName FROM book INNER JOIN author ON author.id= book.authoridbook.id, book.name, book.description, author.name AS authorName FROM book INNER JOIN author ON author.id= book.authorid WHERE id=${id}`)
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return AppService.mysqlConnectionExec(`UPDATE book
    SET name = "${updateBookDto.name}", description= "${updateBookDto.description}", authorid="${updateBookDto.authorId}"
    WHERE id = ${id}`)

  }

  remove(id: number) {
    return AppService.mysqlConnectionExec(`DELETE from book WHERE id=${id}`)
  }
}
