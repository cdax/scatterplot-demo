
import React from 'react';
import PropTypes from 'prop-types';

import { Orientation } from './constants';
import { NumericRangeType } from './types';


const Axis = ({ valueRange, interval, orientation }) => (
  <div style={{
    transform: orientation === Orientation.VERTICAL ? 'rotate(-90deg)' : '',
  }}>
    TODO: Axis {interval}, {orientation}, {valueRange[0]} - {valueRange[1]}
  </div>
);

Axis.propTypes = {
  valueRange: NumericRangeType,
  interval: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf([Orientation.HORIZONTAL, Orientation.VERTICAL]),
};

Axis.defaultProps = {
  valueRange: [0, 0],
  orientation: Orientation.HORIZONTAL,
};

export default Axis;
