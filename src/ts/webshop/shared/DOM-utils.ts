import { Component } from 'tr-utilities-lib';

export function get<T>(cssSelector: string): T {
	const element = document.querySelector(cssSelector)! as unknown as T;
	if (!element) console.error('element not found: ', cssSelector);
	return element;
}

export function getBinding(bindingName: string): HTMLElement {
	return get<HTMLElement>(`[data-binding="${bindingName}"]`);
}

export function bind(bindingName: string, content: string | Component): HTMLElement {
	const item = (typeof content === 'string') ? content : content.render() as HTMLElement;
	const boundElement = getBinding(bindingName);
	boundElement.append(item);
	return boundElement;
}
