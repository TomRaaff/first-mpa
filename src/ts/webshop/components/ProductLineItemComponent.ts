import { button, Component, div, h3, h4, img, li, p } from 'tr-utilities-lib';
import { QuantityComponent } from './QuantityComponent';
import { Product } from '../types/Product';
import { ProductLineItem } from '../types/ProductLineItem';

export type InputState = { product: Product, amount: number };
export type OutputEvents = {
	onAmountChange: (amt: number, product: Product) => void;
	onProductDelete: (lineItem: ProductLineItem) => void;
};

export class ProductLineItemComponent extends Component {

	constructor(state: InputState,
				private readonly events: OutputEvents) {
		super();
		this.setState({ ...state });
	}

	changeAmount = (amt: number) => {
		this.state.amount = amt;
		this.events.onAmountChange(amt, this.state.product);
	};

	render() {
		const product: Product = this.state.product;
		return li({ class: 'product-line-item' },
				  div({ class: 'product-line-item__section' },
					  button('X', { onclick: () => this.events.onProductDelete({...this.state }) })
				  ),
				  div({ class: 'product-line-item__section' },
					  img({
							  class: 'product-line-item__image',
							  src: product.imageUrl,
							  alt: 'a very nice drumkit'
						  })
				  ),
				  div({ class: 'product-line-item__section' },
					  h3(product.brandName),
					  h4(product.productName),
					  p(product.availability),
					  p('Product id: ' + product.id)
				  ),
				  div({ class: 'product-line-item__section text-right' },
					  new QuantityComponent({ amount: this.state.amount }, { onAmountChange: this.changeAmount })
				  ),
				  div({ class: 'product-line-item__section text-right' },
					  p('€' + product.price)
				  ),
				  div({ class: 'product-line-item__section text-right' },
					  p('€' + (product.price * this.state.amount))
				  )
		);
	}
}
