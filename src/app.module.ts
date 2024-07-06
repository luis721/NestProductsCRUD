import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { typeOrmModule } from "./database/TypeOrmModule";
import { ProductsController } from "./products/products.controller";
import { ProductsModule } from "./products/products.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [typeOrmModule, ProductsModule, ConfigModule.forRoot(), AuthModule, UsersModule],
    controllers: [ProductsController],
})
export class AppModule {}
