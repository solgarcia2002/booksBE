import {IsString, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  authorId: number
}
