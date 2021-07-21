import { HeaderComponent } from './components/HeaderComponent';

(function() {
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());
})()
