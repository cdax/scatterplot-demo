
import React from 'react';
import PropTypes from 'prop-types';

import { StatusColors, DefaultPointSize } from './constants';


const Legend = ({ values, ...rest }) => (
  <g {...rest}>
    {
      values.map((value, idx) => (
        <g transform={`translate(${idx * 60})`} key={value}>
          <circle
            cx={DefaultPointSize / 2.0}
            cy={-DefaultPointSize / 2.0}
            r={DefaultPointSize}
            style={{ fill: StatusColors[value] }}
          />
          <text x={DefaultPointSize * 2.0}>{value}</text>
        </g>
      ))
    }
  </g>
);

Legend.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Legend;
