// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  return {
    name: "New York Badgers",
    league: originalTeam.league,
    roster: 25,
  };
};

// Задание 2
type SomeArray = Readonly<Array<number | string>>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  return ["two", ...originalArray.slice(2, 4), 5];
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
  const nextAge: number = originalTeam.captain.age + 1;
  return {
    ...originalTeam,
    captain: { ...originalTeam.captain, age: nextAge },
  };
};
