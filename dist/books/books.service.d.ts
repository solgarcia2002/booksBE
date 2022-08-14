import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    create(createBookDto: CreateBookDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: number): Promise<unknown>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<unknown>;
    remove(id: number): Promise<unknown>;
}
