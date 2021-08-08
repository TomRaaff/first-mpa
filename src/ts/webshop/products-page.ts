import { HeaderComponent } from '../components/HeaderComponent';
import { Collection } from 'tr-utilities-lib';
import { getDrumkits } from './backend/Drumkits';
import { Product } from './types/Product';

(async function () {
	console.log("Products-page loaded");
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());

	getDrumkits()
			.then((products: Collection<Product>) => {

			});

})()
