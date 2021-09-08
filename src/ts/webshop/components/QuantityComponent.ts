import { button, Component, input, span } from 'tr-utilities-lib';

export class QuantityComponent extends Component {
	constructor(amount = 1) {
		super();
		this.setState({ amount });
	}

	increment() {
		this.state.amount = this.state.amount + 1;
	}

	decrement() {
		this.state.amount = this.state.amount - 1;
	}

	render() {
		return span({ class: 'quantity' },
					button({
							   class: 'left',
							   onclick: () => this.decrement(),
							   disabled: (this.state.amount <= 1)
						   }, '-'),
					input({
							  type: 'text',
							  readonly: true,
							  value: this.state.amount.toString()
						  }),
					button({
							   class: 'right',
							   onclick: () => this.increment()
						   }, '+'),
		);
	}
}
