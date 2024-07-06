import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User.entity";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [AuthService, UsersService, JwtService],
})
export class AuthModule {}
