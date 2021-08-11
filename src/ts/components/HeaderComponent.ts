import { a, Component, figure, h2, header, li, nav, ul } from 'tr-utilities-lib';

export class HeaderComponent extends Component {

	render() {
		const pageNavigation = nav(
				ul(
						li(a({href: './calculator.html'}, 'Calculator')),
						li(a({href: './design-system.html'}, 'Design system')),
						li(a({href: './products-page.html'}, 'Webshop'))
				)
		);
		pageNavigation.setAttribute('aria-label', 'page-navigation');

		return header(
				h2('Frameworkless app'),
				pageNavigation
		);
	}
}
