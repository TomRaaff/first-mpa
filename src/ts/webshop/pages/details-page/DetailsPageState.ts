import { Product } from '../../types/Product';
import { getLocalStorage, setLocalStorage } from '../../shared/stores/storage';

export class DetailsPageState {
	product: Product | undefined = undefined;
	amount: number | undefined = undefined;

	static identifier = 'detailsPage';

	static setAmount(amount: number) {
		setLocalStorage(this.identifier, { amount });
	}

	static getAmount(): number | undefined {
		return this.getState()?.amount;
	}

	static setProduct(product: Product) {
		setLocalStorage(this.identifier, { product });
	}

	static getProduct(): Product | undefined {
		return this.getState()?.product;
	}

	static getState(): DetailsPageState | undefined {
		return getLocalStorage(this.identifier) as DetailsPageState;
	}
}
