import { Component, div, h2 } from 'tr-utilities-lib';

export class AnswersComponent extends Component {

	constructor(answer: number) {
		super();
		this.setState({answer});
	}

	render(): HTMLElement {
		if (!this.state.answer) return div();
		return div(
			{ class: 'answers-component' },
			h2(`Here is the answer: ${this.state.answer}`),
		);
	}
}
