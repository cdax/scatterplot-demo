
import React from 'react';
import NumericRange from './types';


const YAxis = ({ valueRange }) => (
  <div>
    TODO: YAxis {valueRange[0]} - {valueRange[1]}
  </div>
);

YAxis.propTypes = {
  valueRange: NumericRange.isRequired,
};

export default YAxis;
