import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

/* 
each: true -> 모든 요소를 하나씩 검사한다는 옵션
선택
아래처럼 하는 것보단 다른 방식 
*/

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

// @nestjs/mapped-types
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
