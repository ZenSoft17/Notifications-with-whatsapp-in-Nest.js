import { IsString, IsInt, IsDate, IsOptional, IsEmail } from 'class-validator'

export class CreateUserDto {
	@IsString()
	name: string

	@IsString()
	phone: string

	@IsString()
	@IsEmail()
	email: string

	@IsInt()
	days: number

	@IsDate()
	end_date: Date
}

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	name?: string

	@IsOptional()
	@IsString()
	phone?: string

	@IsOptional()
	@IsString()
	@IsEmail()
	email?: string

	@IsOptional()
	@IsInt()
	days?: number

	@IsOptional()
	@IsDate()
	end_date?: Date
}
