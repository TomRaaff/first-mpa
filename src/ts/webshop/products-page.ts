import { HeaderComponent } from '../components/HeaderComponent';
import { Collection } from 'tr-utilities-lib';
import { getDrumkits } from './backend/Drumkits';
import { Product } from './types/Product';
import { ProductSummaryComponent } from './components/ProductSummary';

(async function () {
	console.log('Products-page loaded');
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());

	getDrumkits()
			.then((products: Collection<Product>) => {
				products.map((product) => new ProductSummaryComponent(product))
						.forEach((productComponent) => {
							document.getElementById('products-list')!
									.append(productComponent.render());
						});
			})
			.finally(() => {
				document.querySelector('.spinner')!.classList.add('invisible');
			});
})();
