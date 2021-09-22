import { ProductLineItem } from '../../types/ProductLineItem';
import { ShoppingCart } from '../../types/ShoppingCart';
import { getLocalStorage, setLocalStorage } from './storage';

export class ShoppingCartStore {
	private static identifier: 'shoppingCart';

	static addProduct(lineItem: ProductLineItem): void {
		const shoppingCart = this.getShoppingCart();
		const found = shoppingCart.productLineItems.find((item) => item.product.id === lineItem.product.id);
		if (!found) {
			shoppingCart.productLineItems.push(lineItem);
		} else {
			found.amount = lineItem.amount;
		}
		this.storeShoppingCart(shoppingCart);
	}

	static removeProduct(lineItem: ProductLineItem): void {
		const shoppingCart = this.getShoppingCart();
		const newLineItems = shoppingCart.productLineItems
										 .filter((item) => item.product.id !== lineItem.product.id);
		this.storeShoppingCart({...shoppingCart, productLineItems: newLineItems})
	}

	static getShoppingCart(): ShoppingCart {
		const storedCart = getLocalStorage('shoppingCart') as ShoppingCart;
		if (storedCart) {
			return storedCart;
		} else {
			return { totalPrice: 0, productLineItems: [] };
		}
	}

	static storeShoppingCart(cart: ShoppingCart) {
		const productLineItems = cart.productLineItems;
		setLocalStorage('shoppingCart', {totalPrice: cart.totalPrice, productLineItems});
	}
}
