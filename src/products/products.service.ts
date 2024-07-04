import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../entities/Product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productsRepository: Repository<Product>,
    ) {}

    async getAll(page: number, limit: number) {
        const offset = page * limit;
        const result = await this.productsRepository.find({
            skip: offset,
            take: limit,
            select: ["id", "name", "description", "price", "quantity"],
        });

        return result.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
        }));
    }

    async getById(id: number) {
        const item = await this.productsRepository.findOneBy({
            id,
        });
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
        };
    }

    async save(data: Omit<Product, "createdAt" | "updatedAt" | "id">) {
        const result = await this.productsRepository.save({
            name: data.name,
            price: data.price,
            description: data.description,
            quantity: data.quantity,
        });

        return result;
    }

    async update(id: number, data: Omit<Product, "createdAt" | "updatedAt" | "id">) {
        const result = await this.productsRepository.update(
            { id: id },
            {
                name: data.name,
                price: data.price,
                description: data.description,
                quantity: data.quantity,
            },
        );
        return result.affected === 1;
    }

    async delete(id: number) {
        const result = await this.productsRepository.delete(id);
        return result.affected === 1;
    }
}
