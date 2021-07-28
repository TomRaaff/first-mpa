import { HeaderComponent } from './components/HeaderComponent';
import { ColorDisplayComponent } from './components/ColorDisplayComponent';

const colorVars = [
	{
		identifier: 'primary',
		colorName: 'Tiffany Blue'
	},
	{
		identifier: 'secondary',
		colorName: 'Rose Matter'
	},
	{
		identifier: 'tertiary',
		colorName: 'Orange Peel'
	}
];

(function () {
	document.querySelector('body')!
			.prepend(new HeaderComponent().render());

	const detailsEl = document.querySelector('section.colors details')!;
	colorVars.map(({ identifier, colorName }) => new ColorDisplayComponent(identifier, colorName))
			 .forEach((component) => detailsEl.appendChild(component.render()));
})();
