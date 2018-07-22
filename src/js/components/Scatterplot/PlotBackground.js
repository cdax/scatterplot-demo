
import React from 'react';
import PropTypes from 'prop-types';


const PlotBackground = ({ children }) => (
  <div>
    TODO: PlotBackground
    {children}
  </div>
);

PlotBackground.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

PlotBackground.defaultProps = {
  children: [],
};

export default PlotBackground;
