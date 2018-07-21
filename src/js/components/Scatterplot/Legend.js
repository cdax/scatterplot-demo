
import React from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';
import { StatusColors, Alignments } from './constants';


const Legend = ({ values, alignment }) => (
  <div style={{ textAlign: alignment === Alignments.RIGHT ? 'right' : 'left' }}>
    {
      values.map((value, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={idx} style={{ padding: 5 }}>
          <Circle radius={5} color={StatusColors[value]} /> {value}
        </span>
      ))
    }
  </div>
);

Legend.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  alignment: PropTypes.oneOf(Alignments),
};

Legend.defaultProps = {
  alignment: Alignments.RIGHT,
};

export default Legend;
