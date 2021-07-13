import { article, Component, details, div, h3, summary } from 'tr-utilities-lib';

export class DummyComponent extends Component {
	render(): HTMLElement | Array<HTMLElement> {
		return div(
				{class: 'dummy-component-main'},
				article(
						h3('here is an article'),
						details(
								summary('expand'),
								'I have wondered how these html elements would work. I sure hope they are nice!'
						)
				)
		);
	}

}
