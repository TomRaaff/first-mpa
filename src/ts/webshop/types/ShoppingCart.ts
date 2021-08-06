import { Collection } from 'tr-utilities-lib';
import { ProductLineItem } from './ProductLineItem';

export type ShoppingCart = {
	totalPrice: number;
	shippingCosts: number;
	productLineItems: Collection<ProductLineItem>;
}
