import { mergeObjects } from 'tr-utilities-lib';

export function getLocalStorage(identifier: string): object | undefined{
	const stored = localStorage.getItem(identifier);
	if (!stored) {
		return undefined;
	} else {
		return JSON.parse(stored);
	}
}

export function setLocalStorage(identifier: string, object: object) {
		const state = getLocalStorage(identifier);
		if (state) {
			localStorage.setItem(identifier, JSON.stringify(mergeObjects(state, object)));
		} else {
			localStorage.setItem(identifier, JSON.stringify(object));
		}
}

(function initStates() {
	['detailsPage']
			.forEach((stateName) => {
				const stored = localStorage.getItem('detailsPage');
				if (!stored) {
					localStorage.setItem('detailsPage', '{}');
				}
			});
	console.log("states initialized");
})();
