// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FixMeExlude = Exclude<OrderState, 'buyingSupplies' | 'producing'>
type FIXME = FixMeExlude[]

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state): state is FixMeExlude => state !== "buyingSupplies" && state !== "producing"
  );
