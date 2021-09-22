import { ProductLineItem } from './ProductLineItem';

export type ShoppingCart = {
	totalPrice: number;
	productLineItems: Array<ProductLineItem>;
}
