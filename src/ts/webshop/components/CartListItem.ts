import { Component, div, h2, span } from 'tr-utilities-lib';
import { ProductLineItem } from '../types/ProductLineItem';

export class CartListItemComponent extends Component {

	constructor(productLineItem: ProductLineItem) {
		super();
		this.setState({ productLineItem });
	}

	render(): HTMLElement {
		const { product } = this.state.productLineItem;
		return div(
				{ class: 'cart-list-item-component' },
				span(`Product: ${product.productName}`),
				span(`Amount: ${this.state.productLineItem.amount}`)
		);
	}
}
