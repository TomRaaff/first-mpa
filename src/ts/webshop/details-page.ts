import { HeaderComponent } from '../components/HeaderComponent';
import { getDrumkit } from './backend/Drumkits';
import { RatingStarsComponent } from './components/RatingStars';
import { Product } from './types/Product';
import { ProductAvailability } from './types/ProductAvailability.enum';
import { QuantityComponent } from './components/QuantityComponent';
import { get, bind, getBinding } from './shared/DOM-utils';
import { DetailsPageStore as Store } from './shared/stores/DetailsPageStore';

function setBreadcrumb(product: Product) {
	const breadcrumbs = get<HTMLDivElement>('.breadcrumbs');
	breadcrumbs.innerHTML = breadcrumbs.innerHTML.concat(product.brandName, ' ', product.productName);
}

function setAvailability(product: Product) {
	let classModifier = '';
	switch(product.availability) {
		case ProductAvailability.DIRECT: classModifier = 'availability--direct'; break;
		case ProductAvailability.BINNENKORT: classModifier = 'availability--binnenkort'; break;
		case ProductAvailability.RESERVEREN: classModifier = 'availability--reserveren'; break;
	}
	const availability = bind('availability', product.availability);
	availability.classList.add(classModifier);
}

function bindProductData(product: Product) {
	setBreadcrumb(product);
	bind('productBrand', product.brandName);
	bind('productName', product.productName);
	bind('price', '€' + product.price);
	bind('description', product.description);
	get<HTMLImageElement>('.details__image').src = product.imageUrl;
	bind('rating', new RatingStarsComponent(product.rating));
	setAvailability(product);
	bind('quantityComponent', new QuantityComponent())
}

export function buy() {
	const inputEl = getBinding('quantityComponent').querySelector('input') as HTMLInputElement;
	const amount = Number.parseInt(inputEl.value);
	Store.setAmount(amount)
	console.log('buying amount: ', amount);
}

(function () {
	console.log("Details-page loaded");
	get<HTMLBodyElement>('body').prepend(new HeaderComponent().render());
	getBinding('buyButton').addEventListener('click', () => buy());

	const id = new URLSearchParams(window.location.search).get('product')!;
	getDrumkit(id)
			.then((product) => {
				bindProductData(product);
				Store.setProduct(product);
			})
			.finally(() => {
				get<HTMLDivElement>('.spinner').classList.add('invisible');
				get<HTMLElement>('article.invisible').classList.remove('invisible');
			});
})()
