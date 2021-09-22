import { HeaderComponent } from '../../components/HeaderComponent';
import { pageSetup } from '../shared/PageSetup';
import { ShoppingCartStore } from '../shared/stores/ShoppingCartStore';
import { ProductLineItemComponent } from '../components/ProductLineItemComponent';
import { bind, clearElement, get } from '../shared/DOM-utils';
import { ProductLineItem } from '../types/ProductLineItem';

// todo: update the totalprice
function changeProductAmount() {
	console.log('changeProductAmount');
}

function deleteProduct(lineItem: ProductLineItem) {
	ShoppingCartStore.removeProduct(lineItem);
	clearElement('[data-binding="product-line-items"]');
	bindProductLineItemComponents(ShoppingCartStore.getShoppingCart().productLineItems);
}

function bindProductLineItemComponents(items: ProductLineItem[]) {
	const events = {
		onAmountChange: changeProductAmount,
		onProductDelete: deleteProduct
	};
	items.map((item) => new ProductLineItemComponent(item, events))
		 .forEach((component) => bind('product-line-items', component));
}

(function () {
	console.log('Shopping-cart-page loaded');
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());

	const cart = ShoppingCartStore.getShoppingCart();
	pageSetup({
				  bindingFunctions: {
					  'product-line-items': () => { bindProductLineItemComponents(cart.productLineItems) }
				  }
			  });
})();
