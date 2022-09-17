import { IsNumber, IsOptional, IsString } from 'class-validator';

// each: true -> 모든 요소를 하나씩 검사한다는 옵션

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
