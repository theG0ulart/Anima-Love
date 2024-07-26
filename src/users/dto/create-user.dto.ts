import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsNotEmpty()
    @IsString()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsDateString()
    dateOfBirth: string;
}
