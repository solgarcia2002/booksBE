import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
