import addClick from './components/some-code';
import { div, h1 } from 'tr-utilities-lib';
import { DummyComponent } from './components/DummyComponent';


(function () {
	console.log('main.ts loaded');
	addClick();

	document.querySelector('body')!.append(
			div({class: 'new-div'},
				h1('Here is the new code!'),
				new DummyComponent()
				)
	)
}())
