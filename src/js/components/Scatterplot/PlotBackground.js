
import React from 'react';
import PropTypes from 'prop-types';


const PlotBackground = ({ children }) => (
  <div>
    TODO: PlotBackground
    {children}
  </div>
);

PlotBackground.propTypes = {
  children: PropTypes.any, // TODO: should we have stronger validation here?
};

PlotBackground.defaultProps = {
  children: [],
};

export default PlotBackground;
