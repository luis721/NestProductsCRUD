import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { SignInDTO } from "src/auth/dto/SignInDTO";
import { SignUpDTO } from "src/auth/dto/SignUpDTO";
import { UsersService } from "src/users/users.service";

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
    ) {}

    @Post("login")
    async signIn(@Body() signInDTO: SignInDTO) {
        return this.authService.signIn(signInDTO.username, signInDTO.password);
    }

    @Post("register")
    async signUp(@Body() signUpDTO: SignUpDTO) {
        return this.usersService.create(
            signUpDTO.username,
            signUpDTO.name,
            signUpDTO.password,
        );
    }
}
