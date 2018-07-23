
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Legend from './Legend';
import Axis from './Axis';
import PlotBackground from './PlotBackground';
import PlotPoint from './PlotPoint';

import { Orientation, MillisecondsInOneDay } from './constants';
import { PlotPointType } from './types';
import { getDistinctValues, getValueRange, padDates, padNumbers } from './utils';


const DurationInterval = 30; // in seconds

const Scatterplot = ({ data, width, height }) => (
  <PlotBackground width={width} height={height} style={{ border: '1px solid black' }}>
    <Legend values={getDistinctValues(data, 'status')} />
    <Axis
      valueRange={padDates(getValueRange(data, 'start_time', moment))}
      interval={MillisecondsInOneDay}
      orientation={Orientation.HORIZONTAL}
    />
    <Axis
      valueRange={padNumbers(getValueRange(data, 'duration'), DurationInterval)}
      interval={DurationInterval}
      orientation={Orientation.VERTICAL}
    />
    {data.map((plotPoint, idx) => (
      <PlotPoint key={idx} data={plotPoint} /> // eslint-disable-line react/no-array-index-key
    ))}
  </PlotBackground>
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
