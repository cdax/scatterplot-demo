
export const identity = obj => obj;

export const getDistinctValues = (objects, key, transform = identity) => {
  const values = objects.map(object => transform(object[key]));
  return [...(new Set(values))];
};

export const getValueRange = (objects, key, transform = identity) => {
  const values = objects.map(object => transform(object[key]));
  return [Math.min(...values), Math.max(...values)];
};
