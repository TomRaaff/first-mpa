import { HeaderComponent } from '../../../components/HeaderComponent';
import { getDrumkit } from '../../backend/Drumkits';
import { RatingStarsComponent } from '../../components/RatingStars';
import { Product } from '../../types/Product';
import { ProductAvailability } from '../../types/ProductAvailability.enum';
import { QuantityComponent } from '../../components/QuantityComponent';
import { bind, get, getBinding } from '../../shared/DOM-utils';
import { DetailsPageState as State } from './DetailsPageState';
import { pageSetup } from '../../shared/PageSetup';
import { ShoppingCartStore } from '../../shared/stores/ShoppingCartStore';
import { ProductLineItem } from '../../types/ProductLineItem';

function setBreadcrumb(product: Product) {
	const breadcrumbs = get<HTMLDivElement>('.breadcrumbs');
	breadcrumbs.innerHTML = breadcrumbs.innerHTML.concat(' / ', product.brandName, ' ', product.productName);
}

function setAvailability(product: Product) {
	let classModifier = '';
	switch (product.availability) {
	case ProductAvailability.DIRECT:
		classModifier = 'availability--direct';
		break;
	case ProductAvailability.BINNENKORT:
		classModifier = 'availability--binnenkort';
		break;
	case ProductAvailability.RESERVEREN:
		classModifier = 'availability--reserveren';
		break;
	}
	const availability = bind('availability', product.availability);
	availability.classList.add(classModifier);
}

function buy() {
	const productLineItem: ProductLineItem = {
		product: State.getProduct() || {} as Product,
		amount: State.getAmount() || 0
	}
	ShoppingCartStore.addProduct(productLineItem);
	window.location.href = '../shopping-cart-page.html';
}

function getProductId(): string {
	const urlVar = new URLSearchParams(window.location.search).get('product');
	return (urlVar) ? urlVar : '';
}

function setLoading(isLoading: boolean) {
	const spinner = getBinding('spinner');
	const pageContent = getBinding('pageContent');

	if (isLoading) {
		spinner.classList.remove('invisible');
		pageContent.classList.add('invisible');
	} else {
		spinner.classList.add('invisible');
		pageContent.classList.remove('invisible');
	}
}

(function () {
	console.log('Details-page loaded');
	setLoading(true);
	get<HTMLBodyElement>('body').prepend(new HeaderComponent().render());

	getDrumkit(getProductId())
			.then((product) => {
				pageSetup({
							  valueBindings: {
								  productBrand: product.brandName,
								  productName: product.productName,
								  price: '€' + product.price,
								  description: product.description,
								  rating: new RatingStarsComponent(product.rating),
								  quantityComponent: new QuantityComponent({amount: 1}, {onAmountChange: (amt) => State.setAmount(amt)}),
							  },
							  bindingFunctions: {
								  imageUrl: () => get<HTMLImageElement>('.details__image').src = product.imageUrl,
								  breadcrumbs: () => setBreadcrumb(product),
								  availability: () => setAvailability(product)
							  },
							  clickHandlers: {
								  buyButton: () => buy()
							  }
						  });
				State.setProduct(product);
			})
			.finally(() => {
				setLoading(false);
			});
})();
