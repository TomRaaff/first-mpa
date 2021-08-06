import { Component, div, h2 } from 'tr-utilities-lib';
import { Product } from '../types/Product';

export class ProductSummaryComponent extends Component {

	constructor(product: Product) {
		super();
		this.setState({product});
	}

	render(): HTMLElement {
		return div(
				{ class: 'product-summary-component' },
				h2(`${this.state.product.productName}`),
		);
	}
}
