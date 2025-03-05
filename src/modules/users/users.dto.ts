import { IsString, IsInt, IsDate, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  days: number;

  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  days?: number;

  @IsOptional()
  @IsDate()
  start_date?: Date;

  @IsOptional()
  @IsDate()
  end_date?: Date;
}
