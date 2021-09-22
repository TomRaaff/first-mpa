import { button, Component, input, span } from 'tr-utilities-lib';

export type InputState = { amount: number };
export type OutputEvents = { onAmountChange: (amount: number) => void };

export class QuantityComponent extends Component {
	constructor(state: InputState,
				private readonly events: OutputEvents) {
		super();
		this.setState({ ...state });
	}

	increment() {
		this.state.amount = this.state.amount + 1;
		this.events.onAmountChange(this.state.amount);
	}

	decrement() {
		this.state.amount = this.state.amount - 1;
		this.events.onAmountChange(this.state.amount);
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
