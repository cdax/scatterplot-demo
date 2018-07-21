
import React from 'react';
import PropTypes from 'prop-types';

import { Alignments } from './constants';


const Legend = ({ values, alignment }) => (
  <div style={{ textAlign: alignment === Alignments.RIGHT ? 'right' : 'left' }}>
    TODO: Legend {values.join(', ')}
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
