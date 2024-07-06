import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

    getById(username: string) {
        return this.usersRepository.findOneBy({
            username,
        });
    }

    async create(username: string, name: string, password: string) {
        return this.usersRepository.save({
            username,
            name,
            password,
        });
    }
}
