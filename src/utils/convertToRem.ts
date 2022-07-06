export const calculateInRem = (value: number) => {
  const division = value / 16;
  return `${division}rem`;
};
