import { HeaderComponent } from '../components/HeaderComponent';

(function () {
	console.log("Products-page loaded");
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());
})()
