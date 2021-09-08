import { Product } from '../../types/Product';
import { getLocalStorage, setLocalStorage } from './storage';

/*
	type DetailsPageState = {
	 	product: Product;
	 	amount: number;
	}
 */
export class DetailsPageStore {
	static identifier = 'detailsPage';

	static setAmount(amount: number) {
		setLocalStorage(this.identifier, { amount });
	}

	static getAmount(): number {
		return getLocalStorage(this.identifier).amount;
	}

	static setProduct(product: Product) {
		setLocalStorage(this.identifier, { product})
	}
}
