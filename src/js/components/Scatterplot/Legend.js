
import React from 'react';
import PropTypes from 'prop-types';


const Legend = ({ values }) => (
  <div>
    TODO: Legend {values.join(', ')}
  </div>
);

Legend.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Legend;
