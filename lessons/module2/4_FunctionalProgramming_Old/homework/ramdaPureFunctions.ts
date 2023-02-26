import {
  compose,
  prop,
  last,
  sortBy,
  map,
  concat,
  join,
  toPairs,
  slice,
  split,
  fromPairs,
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
export const getTopName: any = compose(prop("name"), last, sortBy(prop("score")));

// // Задание 2
// eslint-disable-next-line @typescript-eslint/ban-types
export type QsObj = Record<string, string | number | boolean | object>;

// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
export const createQs: any = compose(concat("?"), join("&"), map(join("=")), toPairs);

// eslint-disable-next-line
// @ts-ignore
// Задание 3
// eslint-disable-next-line
export const parseQs: any = compose(fromPairs, map(split("=")), split("&"), slice(1, undefined));
