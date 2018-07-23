
import React from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';
import { StatusColors } from './constants';


const Legend = ({ values }) => (
  <div style={{ textAlign: 'right' }}>
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
};

export default Legend;
