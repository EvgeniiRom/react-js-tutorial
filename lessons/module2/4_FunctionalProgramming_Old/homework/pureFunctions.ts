// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return [...teams].sort((t1, t2) => t2.score - t1.score)[0].name;
};

// // Задание 2
export type QsObj = Record<
  string,
  string | number | boolean | string[] | number[] | boolean[]
>;

export const createQs = (qsObj: QsObj): string => {
  return (
    "?" +
    Object.keys(qsObj)
      .map((key) => `${key}=${qsObj[key].toString()}`)
      .join("&")
  );
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  return qs
    .substring(1)
    .split("&")
    .map((pair) => pair.split("="))
    .reduce((r, v) => ({ ...r, [v[0]]: v[1] }), {});
};
