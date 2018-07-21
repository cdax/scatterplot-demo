
import React from 'react';
import NumericRange from './types';


const XAxis = ({ valueRange }) => (
  <div>
    TODO: XAxis {valueRange[0]} - {valueRange[1]}
  </div>
);

XAxis.propTypes = {
  valueRange: NumericRange.isRequired,
};

export default XAxis;