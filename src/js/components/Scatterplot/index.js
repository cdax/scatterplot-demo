
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Legend from './Legend';
import XAxis from './XAxis';
import YAxis from './YAxis';
import PlotBackground from './PlotBackground';
import PlotPoint from './PlotPoint';

import { identity } from './utils';


const getValueRange = (objects, key, transform = identity) => {
  const values = objects.map(object => transform(object[key]));
  return [Math.min(...values), Math.max(...values)];
};


const Scatterplot = ({ data }) => (
  <div>
    <Legend />
    <XAxis valueRange={getValueRange(data, 'start_time', moment)} />
    <YAxis valueRange={getValueRange(data, 'duration')} />
    <PlotBackground>
      {data.map((plotPoint, idx) => (
        <PlotPoint key={idx} data={plotPoint} /> // eslint-disable-line react/no-array-index-key
      ))}
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
