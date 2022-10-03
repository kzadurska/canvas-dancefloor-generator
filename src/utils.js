import { BASE_TILE_COLORS, ACTIVE_TILE_COLORS } from 'constant';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTileColor(arrayOfColors) {
  const index = randomInteger(0, arrayOfColors.length - 1);
  return arrayOfColors[index];
}

export function getBaseColor() {
  return getTileColor(BASE_TILE_COLORS);
}

export function getActiveColor() {
  return getTileColor(ACTIVE_TILE_COLORS);
}

export function getColorByIndex(index) {
  return ACTIVE_TILE_COLORS[index];
}
