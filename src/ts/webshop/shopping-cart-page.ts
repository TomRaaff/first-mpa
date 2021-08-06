import { HeaderComponent } from '../components/HeaderComponent';

(function () {
	console.log("Shopping-cart-page loaded");
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());
})()
