import { IsString, Length } from "class-validator";

export class SignUpDTO {
    @IsString()
    username: string;

    @IsString()
    name: string;

    @IsString()
    @Length(8)
    password: string;
}
