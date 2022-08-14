import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
