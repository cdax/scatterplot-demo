
import React from 'react';
import { NumericRangeType } from './types';


const XAxis = ({ valueRange }) => (
  <div>
    TODO: XAxis {valueRange[0]} - {valueRange[1]}
  </div>
);

XAxis.propTypes = {
  valueRange: NumericRangeType,
};

XAxis.defaultProps = {
  valueRange: [0, 0],
};

export default XAxis;
