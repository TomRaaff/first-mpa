import { Component, button, div, h3, header, input } from 'tr-utilities-lib';
import { AnswersComponent } from './AnswersComponent';

export class CalculatorComponent extends Component {
	private equationInput = input({ class: 'equationInput', type: 'text' }) as HTMLInputElement;

	constructor(answer: number) {
		super();
		this.setState({ answer });
	}

	add(buttonEl: HTMLButtonElement, inputElement: HTMLInputElement) {
		const text = buttonEl.innerText;
		inputElement.value = inputElement.value + text;
	}

	addToEquation(event: Event) {
		const button = event.currentTarget as HTMLButtonElement;
		this.add(button, this.equationInput);
	}

	clearEquation(inputElement: HTMLInputElement) {
		inputElement.value = '';
		this.state.answer = '';
	}

	solveEquation(inputElement: HTMLInputElement) {
		// regex matches the negation of all allowed characters
		const disallowedChars = /([^0-9()/+\-*%]+)/gmi;
		const sanitized = inputElement.value.replace(disallowedChars, '');
		this.state.answer = eval(sanitized);
		inputElement.value = this.state.answer.toString();
	}

	render(): HTMLElement {
		return div({class:'component'},
				   div({ class: 'calculator' },
				   		header(
							   {
								   onclick: function () {
									   const headElement = this as HTMLHeadElement;
									   headElement.remove();
								   }
							   },
							   h3('Calculator')
				   		),
				   		this.equationInput,
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '('),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, ')'),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '%'),
				   		button({ class: 'clearEquation', onclick: () => this.clearEquation(this.equationInput) }, 'clear'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '7'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '8'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '9'),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '/'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '4'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '5'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '6'),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '*'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '1'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '2'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '3'),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '+'),
				   		button({ class: 'number', onclick: (event: Event) => this.addToEquation(event) }, '0'),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '.'),
				   		button({ type: 'solveEquation', onclick: () => this.solveEquation(this.equationInput) }, '='),
				   		button({ class: 'equationItem', onclick: (event: Event) => this.addToEquation(event) }, '-'),
				   ),
				   new AnswersComponent(this.state.answer)
		);
	}

}
