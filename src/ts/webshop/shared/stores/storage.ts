import { mergeObjects } from 'tr-utilities-lib';

export function getLocalStorage(identifier: string): any {
	const stored = localStorage.getItem(identifier);
	if (!stored) {
		throw new Error(`no local storage was set for id: ${identifier}`);
	} else {
		return JSON.parse(stored);
	}
}

export function setLocalStorage(identifier: string, object: object) {
	const state = getLocalStorage(identifier);
	localStorage.setItem(identifier, JSON.stringify(mergeObjects(state, object)));
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
