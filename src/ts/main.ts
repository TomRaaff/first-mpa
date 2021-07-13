import { div, h1 } from 'tr-utilities-lib';
import { DummyComponent } from './components/DummyComponent';


(function () {
	console.log('main.ts loaded');

	document.querySelector('body')!.append(
			div({class: 'new-div'},
				h1('Here is the new code!'),
				new DummyComponent()
				)
	)
}())
