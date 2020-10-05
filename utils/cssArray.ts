export const cssArray = <T>(
  array: T[],
  unit: string,
  func: (arg: T) => number | string
) => array.map((x) => func(x).toString() + unit).join(" ");
