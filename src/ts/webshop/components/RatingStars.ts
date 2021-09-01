import { Component, div, i, span } from 'tr-utilities-lib';

const Star = {
	WHOLE: 'fas',
	EMPTY: 'far'
};

export class RatingStarsComponent extends Component {

	constructor(rating: number) {
		super();
		this.setState({ rating });
	}

	private rate(rating: number) {
		this.setState({ rating });
	}

	private hover(hover: number) {
		this.getStarIconElements()
			.forEach((starIcon, index) => {
				starIcon.classList.remove(Star.WHOLE, Star.EMPTY);
				const starType = (index <= hover) ? Star.WHOLE : Star.EMPTY;
				starIcon.classList.add(starType);
			});
	}

	private getStarIconElements(): Array<HTMLElement> {
		return [0, 1, 2, 3, 4]
				.map((index) => `${this.componentId}_${index}`)
				.map((id) => document.getElementById(id)!)
	}

	private mouseEvents(rating: number) {
		return {
			onclick: () => this.rate(rating),
			onmouseenter: () => this.hover(rating),
			onmouseout: () => this.hover(this.state.rating)
		};
	}

	render(): HTMLElement {
		const stars = [0, 1, 2, 3, 4].map((num) => (num <= this.state.rating) ? Star.WHOLE : Star.EMPTY);

		return span({class: 'rating'},
				i({ id: `${this.componentId}_0`, class: `${stars[0]} fa-star`, ...this.mouseEvents(0) }),
				i({ id: `${this.componentId}_1`, class: `${stars[1]} fa-star`, ...this.mouseEvents(1) }),
				i({ id: `${this.componentId}_2`, class: `${stars[2]} fa-star`, ...this.mouseEvents(2) }),
				i({ id: `${this.componentId}_3`, class: `${stars[3]} fa-star`, ...this.mouseEvents(3) }),
				i({ id: `${this.componentId}_4`, class: `${stars[4]} fa-star`, ...this.mouseEvents(4) }),
		);
	}
}
