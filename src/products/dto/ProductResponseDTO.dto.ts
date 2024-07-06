export class ProductResponseDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    location: string;
    actions: {
        update: string;
        delete: string;
    };
}
