import { writable } from 'svelte/store';

export const mineField = writable([]);
export const mineAmount = writable(3);
export const betAmount = writable(0);
export const mineResult = writable(false);
export const tilesClicked = writable(0);
export const multi = writable(0);
export const gameState = writable('pre');