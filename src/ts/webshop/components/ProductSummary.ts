import { a, article, button, Component, div, h3, h4, i, img } from 'tr-utilities-lib';
import { Product } from '../types/Product';
import { RatingStarsComponent } from './RatingStars';

export class ProductSummaryComponent extends Component {

	constructor(product: Product) {
		super();
		this.setState({ product });
	}

	private truncate(text: string): string {
		return text.slice(0, 150).concat('...');
	}

	render(): HTMLElement {
		const p = this.state.product;
		const searchParams = `?product=${p.id}`;
		return article(
				div({ class: 'img-container' },
					a({ href: `details-page.html${searchParams}`},
					  img({ src: p.imageUrl })
					)
				),
				div({ class: 'info-container' },
					a({ class: 'product-title', href: `details-page.html${searchParams}`},
						h4(`${p.brandName} ${p.productName}`),
						h3(`€${p.price}`)
					),
					div(
						new RatingStarsComponent(p.rating)
					),
					div({class: 'description'},
						this.truncate(p.description)
					),
					div({class: 'buttons'},
						button({ class: 'btn--big btn--primary' },
							i({class: 'fas fa-shopping-basket'}),
							' buy'
						)
					)
				)
		);
	}
}
