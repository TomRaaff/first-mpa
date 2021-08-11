import { article, button, Component, div, h3, h4, i, img } from 'tr-utilities-lib';
import { Product } from '../types/Product';
import { RatingStarsComponent } from './RatingStars';

export class ProductSummaryComponent extends Component {

	constructor(product: Product) {
		super();
		this.setState({ product });
	}

	navToDetails() {
		console.log("navToDetails", {state: this.state, loc: window.location});
		window.location.href = 'details-page.html';
	}

	truncate(text: string): string {
		return text.slice(0, 150).concat('...');
	}

	render(): HTMLElement {
		const p = this.state.product;
		return article(
				div({ class: 'img-container' },
					img({ src: p.imageUrl })
				),
				div({ class: 'info-container' },
					div(
						{ class: 'product-title' },
						h4(`${p.brandName} ${p.productName}`),
						h3(`€${p.price}`)
					),
					div({class: 'rating'},
						new RatingStarsComponent(p.rating)
					),
					div({class: 'description'},
						this.truncate(p.description)
					),
					div({class: 'buttons'},
						button({ class: 'primary' },
							i({class: 'fas fa-shopping-basket'}),
							' buy'
						)
					)
				)
		);
	}
}
