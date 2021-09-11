import { Component } from 'tr-utilities-lib';
import { bind, getBinding } from './DOM-utils';

/**
 * <b>ValueBindings:</b> it's keys are linked to it's `data-binding="{key}"` equivalent in the HTML. The values will be assigned to
 * those dataBinding entrypoints.
 *
 * <b>BindingFunctions:</b> Whenever you need to bind properties that can't be expressed in `data-biding="{key}"`, you can
 * specify a function that does the databinding.
 *
 * <b>ClickHandlers:</b> it's keys are linked to it's `data-binding="{key}"` equivalent in the HTML. The values will be
 * assigned as clickhandlers.
 */
export type BindingConfig = {
	valueBindings?: ValueBindings;
	bindingFunctions?: BindingFunctions;
	clickHandlers?: ClickHandlers;
}
/**
 * It's key should correspond with the data-binding key that you set in the html.
 * ie. `<button data-binding="innerText">` corresponds with `{innerText: "lorum ipsum"}`
 */
export type ValueBindings = { [key: string]: string | Component };

/**
 * It's key should correspond with the data-binding key that you set in the html.
 * ie. `<button data-binding="buy">` corresponds with `{buy: () => console.log('bought')}`
 */
export type ClickHandlers = { [key: string]: () => void };

/**
 * It's keys are not used. Only it's values will be executed.
 */
export type BindingFunctions = { [key: string]: () => void };

export function pageSetup(config?: BindingConfig) {
	if (config?.valueBindings) {
		Object.entries(config.valueBindings)
			  .forEach(([key, value]) => {
				  bind(key, value);
			  });
	}
	if (config?.bindingFunctions) {
		Object.values(config.bindingFunctions)
			  .forEach((fun) => fun());
	}
	if (config?.clickHandlers) {
		Object.entries(config.clickHandlers)
			  .forEach(([key, value]) => {
				  getBinding(key)
						  .addEventListener('click', value);
			  });
	}
}
