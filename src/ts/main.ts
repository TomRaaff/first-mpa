import { CalculatorComponent } from './components/CalculatorComponent';
import { HeaderComponent } from './components/HeaderComponent';


(function () {
	console.log('main.ts loaded');
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());
	document.querySelector('section.item-content')!
			.append(new CalculatorComponent(0).render());
}())
