
import React from 'react';
import PropTypes from 'prop-types';


const Circle = ({ radius, color }) => (
  <svg width={2 * radius} height={2 * radius}>
    <circle cx={radius} cy={radius} r={radius} fill={color} />
  </svg>
);

Circle.propTypes = {
  radius: PropTypes.number.isRequired, // TODO: this should be a positive number
  color: PropTypes.string.isRequired, // TODO: this should be a valid RGB hexcode
};

export default Circle;
