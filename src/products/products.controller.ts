import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UnprocessableEntityException,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Product } from "src/entities/Product.entity";
import { ProductResponseDTO } from "./dto/ProductResponseDTO.dto";
import { ProductDTO } from "./dto/ProductDTO.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    private static transformProduct(product: Product) {
        const actionURL = `/products/${product.id}`;
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            price: product.price,
            actions: {
                update: actionURL,
                delete: actionURL,
            },
        };
    }

    @Get("")
    @ApiOperation({ description: "List products with pagination" })
    @ApiResponse({
        type: ProductResponseDTO,
    })
    async getAll(
        @Query("page", new DefaultValuePipe(0), ParseIntPipe) page: number,
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
    ) {
        if (page < 0) throw new UnprocessableEntityException();
        const VALID_LIMITS = [5, 10, 15];
        if (!VALID_LIMITS.includes(limit)) throw new UnprocessableEntityException();
        const result = await this.productsService.getAll(page, limit);
        return result;
    }

    @Post("")
    @ApiOperation({ description: "Create a new product" })
    @ApiResponse({
        status: 201,
        description: "The product has been successfully created.",
    })
    async create(@Body() dto: ProductDTO) {
        return await this.productsService.save(dto);
    }

    @Get(":id")
    @ApiOperation({ description: "Get product by id" })
    @ApiResponse({
        type: ProductResponseDTO,
    })
    async getById(@Param("id", ParseIntPipe) id: number) {
        // TODO: HATEOAS
        const result = await this.productsService.getById(id);
        if (!result) throw new NotFoundException();
        return result;
    }

    @Put(":id")
    @ApiOperation({ description: "Update a product by id" })
    async update(@Param("id", ParseIntPipe) id: number, @Body() dto: ProductDTO) {
        const result = await this.productsService.update(id, dto);
        if (!result) throw new NotFoundException();
        return { status: "Ok" };
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    @ApiOperation({ description: "Delete a product by id" })
    @ApiResponse({
        status: 204,
        description: "The product has been successfully deleted.",
    })
    async delete(@Param("id", ParseIntPipe) id: number) {
        const result = await this.productsService.delete(id);
        if (!result) throw new NotFoundException();
        return { status: "Ok" };
    }
}
