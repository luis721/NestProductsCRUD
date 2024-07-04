import { IsPositive, IsString, Length } from "class-validator";

export class ProductDTO {
    @IsString()
    @Length(2)
    name: string;

    @IsString()
    description: string;

    @IsPositive()
    price: number;

    @IsPositive()
    quantity: number;
}
