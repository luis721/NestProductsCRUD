import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsPositive, IsString, Length } from "class-validator";

export class ProductDTO {
    @IsString()
    @Length(2)
    name: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    description: string;

    @IsPositive()
    price: number;

    @IsPositive()
    quantity: number;

    @IsString()
    @IsOptional()
    location: string;
}
