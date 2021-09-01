import { ProductAvailability } from './ProductAvailability.enum';

export type Product = {
	id: string;
	brandName: string;
	productName: string;
	rating: number;
	price: number;
	description: string;
	imageUrl: string;
	attributes: {
		color: string;
		bassdrumSize: number;
		cymbalsIncluded: boolean;
		hardwareIncluded: boolean;
	},
	availability: ProductAvailability;
}
