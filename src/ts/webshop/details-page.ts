import { HeaderComponent } from '../components/HeaderComponent';

(function () {
	console.log("Details-page loaded");
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());
})()
