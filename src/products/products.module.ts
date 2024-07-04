import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/entities/Product.entity";
import { ProductsController } from "src/products/products.controller";
import { ProductsService } from "src/products/products.service";

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    exports: [ProductsService],
    imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
