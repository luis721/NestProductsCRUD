export class ProductResponseDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    actions: {
        update: string;
        delete: string;
    };
}
