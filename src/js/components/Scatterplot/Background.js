
import React from 'react';
import PropTypes from 'prop-types';


const Background = ({
  width,
  height,
  margin,
  children,
}) => (
  <div>
    <svg
      className="container"
      width={width}
      height={height}
    >
      <defs>
        <filter id="shadow" x="-40%" width="180%" y="-40%" height="180%">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <g style={{ transform: `translate(${margin}px, ${margin}px)` }}>
        {children}
      </g>
    </svg>
  </div>
);

Background.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
  children: PropTypes.any, // TODO: should we have stronger validation here?
};

Background.defaultProps = {
  children: [],
};

export default Background;
