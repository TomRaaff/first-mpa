import { HeaderComponent } from '../components/HeaderComponent';
import { getDrumkit } from './backend/Drumkits';

function get<T>(cssSelector: string): T {
	const element = document.querySelector(cssSelector)! as unknown as T;
	if (!element) console.error('element not found: ', cssSelector);
	return element;
}

(function () {
	console.log("Details-page loaded");
	get<HTMLBodyElement>('body')
			.prepend(new HeaderComponent().render());

	const id = new URLSearchParams(window.location.search).get('product')!;
	getDrumkit(id)
			.then((product) => {
				get<HTMLHeadingElement>('.productBrand').innerHTML = product.brandName;
				get<HTMLHeadingElement>('.productName').innerHTML = product.productName;
				get<HTMLHeadingElement>('.price').innerHTML = '€' + product.price;
				get<HTMLParagraphElement>('.description').innerHTML = product.description;
				get<HTMLImageElement>('.productImage').src = product.imageUrl;
			})
			.finally(() => {
				document.querySelector('.spinner')!.classList.add('invisible');
				document.querySelector('article.invisible')!.classList.remove('invisible');
			});
})()
