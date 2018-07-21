
import React from 'react';
import PropTypes from 'prop-types';

import Legend from './Legend';
import XAxis from './XAxis';
import YAxis from './YAxis';
import PlotBackground from './PlotBackground';
import PlotPoint from './PlotPoint';


const getValueRange = (objects, key) => {
  const values = objects.map(object => object[key]);
  return [Math.min(...values), Math.max(...values)];
};


const Scatterplot = ({ data }) => (
  <div>
    <Legend />
    <XAxis valueRange={getValueRange(data, 'start_time')} />
    <YAxis valueRange={getValueRange(data, 'duration')} />
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
