import { HeaderComponent } from '../../components/HeaderComponent';
import { Collection } from 'tr-utilities-lib';
import { getDrumkits } from '../backend/Drumkits';
import { Product } from '../types/Product';
import { ProductSummaryComponent } from '../components/ProductSummary';
import { bind, get } from '../shared/DOM-utils';

(async function () {
	console.log('Products-page loaded');
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());

	getDrumkits()
			.then((products: Collection<Product>) => {
				products.forEach((product) => {
							bind('products-list', new ProductSummaryComponent(product));
						});
			})
			.finally(() => {
				get<HTMLElement>('.spinner').classList.add('invisible');
			});
})();
