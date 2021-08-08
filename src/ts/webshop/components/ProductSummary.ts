import { article, button, Component, div, h3, h4, i, img } from 'tr-utilities-lib';
import { Product } from '../types/Product';

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
				{ onclick: this.navToDetails.bind(this) },
				div(
					{ class: 'img-container' },
					img({ src: p.imageUrl })
				),
				div({ class: 'info-container' },
					div(
						{ class: 'product-title' },
						h4(`${p.brandName} ${p.productName}`),
						h3(`€${p.price}`)
					),
					div({class: 'rating'},
						i({class: 'fas fa-star'}),
						i({class: 'fas fa-star'}),
						i({class: 'fas fa-star'}),
						i({class: 'fas fa-star'}),
						i({class: 'far fa-star'}),
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

// <article>
// 		<div class="img-container">
// 			<img src="/img/gretsch.jpg" alt="a Gretsch drumkit">
// 		</div>
// 		<div class="info-container">

// 			<div class="buttons">
// 				<button class="primary">
// 					<i class="fas fa-shopping-basket"/></i> Buy
// 				</button>
// 			</div>
// 		</div>
// </article>
