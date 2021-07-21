import { Component, div, h2 } from 'tr-utilities-lib';

export class AnswersComponent extends Component {

	constructor(answer: number) {
		super();
		this.setState({answer});
	}

	render(): HTMLElement | Array<HTMLElement> {
		return div(
			{ class: 'answers-component' },
			h2(`here is the answer: ${this.state.answer}`),
		);
	}
}
