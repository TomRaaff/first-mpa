import { Component, div, h2, h4, small } from 'tr-utilities-lib';

export class ColorDisplayComponent extends Component {
	private isGrey: string;

	constructor(private readonly identifier: string,
				private readonly colorName: string) {
		super();
		this.isGrey = (identifier === 'grey') ? 'isGrey' : '';
	}

	render(): HTMLElement {
		return div({ class: 'color-sample' },
				   h2(this.colorName),
				   div({ class: 'color-info' },
					   h4(`$${this.identifier}`),
					   div({ class: 'pre-title' }, `${this.identifier} CTA color`)
				   ),
				   div({ class: 'color-variations' },
					   div({ class: `color-variation bg-${this.identifier}-lightest ${this.isGrey}` },
						   small(`$${this.identifier}1`)
					   ),
					   div({ class: `color-variation bg-${this.identifier}-light ${this.isGrey}` },
						   small(`$${this.identifier}3`)
					   ),
					   div({ class: `color-variation bg-${this.identifier}-dark` },
						   small(`$${this.identifier}7`)
					   ),
					   div({ class: `color-variation bg-${this.identifier}-darkest` },
						   small(`$${this.identifier}9`)
					   )
				   ),
				   div({class: `color-example bg-${this.identifier}`})
		);
	}

}
