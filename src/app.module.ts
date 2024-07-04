import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { typeOrmModule } from "./database/TypeOrmModule";
import { ProductsController } from "./products/products.controller";
import { ProductsModule } from "./products/products.module";

@Module({
    imports: [typeOrmModule, ProductsModule, ConfigModule.forRoot()],
    controllers: [ProductsController],
})
export class AppModule {}
