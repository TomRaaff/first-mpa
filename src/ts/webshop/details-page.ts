import { HeaderComponent } from '../components/HeaderComponent';
import { getDrumkit } from './backend/Drumkits';
import { RatingStarsComponent } from './components/RatingStars';
import { Product } from './types/Product';
import { ProductAvailability } from './types/ProductAvailability.enum';
import { QuantityComponent } from './components/quantityComponent';

function get<T>(cssSelector: string): T {
	const element = document.querySelector(cssSelector)! as unknown as T;
	if (!element) console.error('element not found: ', cssSelector);
	return element;
}

function getBinding(bindingName: string): HTMLElement {
	return get<HTMLElement>(`[data-binding="${bindingName}"]`);
}

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
	const availability = get<HTMLDivElement>('.availability');
	availability.append(product.availability);
	availability.classList.add(classModifier);
}

(function () {
	console.log("Details-page loaded");
	get<HTMLBodyElement>('body')
			.prepend(new HeaderComponent().render());

	const id = new URLSearchParams(window.location.search).get('product')!;
	getDrumkit(id)
			.then((product) => {
				setBreadcrumb(product);
				getBinding('productBrand').append(product.brandName);
				getBinding('productName').append(product.productName);
				getBinding('price').append('€' + product.price);
				getBinding('description').append(product.description);
				get<HTMLImageElement>('.details__image').src = product.imageUrl;
				getBinding('rating').append(new RatingStarsComponent(product.rating).render());
				setAvailability(product);
				getBinding('quantityComponent').append(new QuantityComponent().render())
			})
			.finally(() => {
				get<HTMLDivElement>('.spinner').classList.add('invisible');
				get<HTMLElement>('article.invisible').classList.remove('invisible');
			});
})()
