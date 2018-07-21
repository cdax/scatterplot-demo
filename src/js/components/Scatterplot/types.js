
import PropTypes from 'prop-types';
import moment from 'moment';

import { StatusValues } from './constants';


export const NumericRangeType = (props, propName) => { // eslint-disable-line consistent-return
  const propValue = props[propName];
  if (
    !Array.isArray(propValue) ||
    propValue.length !== 2 ||
    !propValue.every(Number.isInteger) ||
    propValue[0] > propValue[1]
  ) {
    return new Error(`${propName} needs to be an array of two numbers sorted in ascending order`);
  }
};

export const ISO8601Type = (props, propName) => { // eslint-disable-line consistent-return
  const propValue = props[propName];
  try {
    moment(propValue, moment.ISO_8601);
  } catch (e) {
    throw new Error(`${propName} needs to be an RFC3339 formatted timestamp string`);
  }
};

export const PlotPointType = PropTypes.shape({
  start_time: ISO8601Type.isRequired,
  duration: PropTypes.number.isRequired, // TODO: this should be a positive number
  status: PropTypes.oneOf(StatusValues).isRequired,
});
