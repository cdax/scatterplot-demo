
import React from 'react';
import PropTypes from 'prop-types';

import Legend from './Legend';
import XAxis from './XAxis';
import YAxis from './YAxis';
import PlotBackground from './PlotBackground';
import PlotPoint from './PlotPoint';


const Scatterplot = ({ data }) => (
  <div>
    <Legend />
    <XAxis />
    <YAxis />
    <PlotBackground>
      {data.map(plotPoint => <PlotPoint data={plotPoint} />)}
    </PlotBackground>
  </div>
);

Scatterplot.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
};

Scatterplot.defaultProps = {
  data: [],
};

export default Scatterplot;
