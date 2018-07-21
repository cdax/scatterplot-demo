
import React from 'react';
import { NumericRangeType } from './types';


const YAxis = ({ valueRange }) => (
  <div>
    TODO: YAxis {valueRange[0]} - {valueRange[1]}
  </div>
);

YAxis.propTypes = {
  valueRange: NumericRangeType,
};

YAxis.defaultProps = {
  valueRange: [0, 0],
};

export default YAxis;
