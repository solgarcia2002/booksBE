import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsService {
    create(createAuthorDto: CreateAuthorDto): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: number): Promise<unknown>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<unknown>;
    remove(id: number): Promise<unknown>;
}
