import { button, Component, input, span } from 'tr-utilities-lib';

export class QuantityComponent extends Component {
	constructor() {
		super();
		this.setState({ value: 1 });
	}

	increment() {
		this.state.value = this.state.value + 1;
	}

	decrement() {
		this.state.value = this.state.value - 1;
	}

	render() {
		return span({ class: 'quantity' },
					button({
							   class: 'left',
							   onclick: () => this.decrement(),
							   disabled: (this.state.value <= 1)
						   }, '-'),
					input({
							  type: 'text',
							  readonly: true,
							  value: this.state.value.toString()
						  }),
					button({
							   class: 'right',
							   onclick: () => this.increment()
						   }, '+'),
		);
	}
}
