
import moment from 'moment';


export const identity = obj => obj;

export const getDistinctValues = (objects, key, transform = identity) => {
  const values = objects.map(object => transform(object[key]));
  return [...(new Set(values))];
};

export const getValueRange = (objects, key, transform = identity) => {
  const values = objects.map(object => transform(object[key]));
  return [Math.min(...values), Math.max(...values)];
};

export const padDates = ([lowerNumericDate, upperNumericDate]) => {
  const lowerPaddedNumericDate = moment(lowerNumericDate).subtract('day', 1).startOf('day').valueOf();
  const upperPaddedNumericDate = moment(upperNumericDate).add('day', 1).endOf('day').valueOf();
  debugger;
  return [lowerPaddedNumericDate, upperPaddedNumericDate];
};

export const padNumbers = ([lowerNumber, upperNumber], interval = 30, min = 0) => {
  const lowerPaddedNumber = Math.max(min, Math.floor((lowerNumber + interval) / interval));
  const upperPaddedNumber = Math.ceil((upperNumber + interval) / interval);
  return [lowerPaddedNumber, upperPaddedNumber];
};
