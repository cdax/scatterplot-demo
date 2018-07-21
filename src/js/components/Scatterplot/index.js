
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Legend from './Legend';
import XAxis from './XAxis';
import YAxis from './YAxis';
import PlotBackground from './PlotBackground';
import PlotPoint from './PlotPoint';

import { PlotPointType } from './types';
import { getDistinctValues, getValueRange } from './utils';


const Scatterplot = ({ data, width, height }) => (
  <div width={width} height={height} style={{ border: '1px solid black' }}>
    <Legend values={getDistinctValues(data, 'status')} />
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
  data: PropTypes.arrayOf(PlotPointType),
  width: PropTypes.number,
  height: PropTypes.number,
};

Scatterplot.defaultProps = {
  data: [],
  width: 800,
  height: 300,
};

export default Scatterplot;
