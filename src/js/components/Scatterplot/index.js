
import React from 'react';
import PropTypes from 'prop-types';

import { scaleLinear, scaleTime } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { max, extent, range } from 'd3-array';
import { select } from 'd3-selection';
import { timeDay } from 'd3-time';
import { timeFormat } from 'd3-time-format';

import Background from './Background';
import Legend from './Legend';
import Point from './Point';

import { PlotPointType } from './types';


const getXScale = (data, width) =>
  scaleTime()
    .domain(extent(data, datum => new Date(datum.start_time)))
    .nice()
    .range([0, width]);


const getXAxis = xScale =>
  axisBottom()
    .scale(xScale)
    .ticks(timeDay)
    .tickFormat(timeFormat('%b %e'));


const getYScale = (data, height) => {
  const maxY = max(data, datum => datum.duration);
  return scaleLinear()
    .domain([0, maxY])
    .range([height, 0]);
};


const getYAxis = (yScale, maxY, width) => (g) => {
  const baseAxis = axisLeft()
    .scale(yScale)
    .tickValues(range(0, maxY, 30))
    .tickFormat(tick => (tick > 0 && tick % 60 === 0 ? `${tick / 60} min` : ''))
    .tickSize(-width);
  g.call(baseAxis);
  g.select('.domain').remove();
  g.selectAll('.tick:not(:first-of-type) line').attr('stroke', '#777').attr('stroke-dasharray', '2,2');
};


const Scatterplot = ({ data, width, height }) => {
  const margin = 70;
  const marginAdjustedWidth = width - (2 * margin);
  const marginAdjustedHeight = height - (2 * margin);

  const xScale = getXScale(data, marginAdjustedWidth);
  const yScale = getYScale(data, marginAdjustedHeight);

  const maxY = max(data, datum => datum.duration);

  const xAxis = getXAxis(xScale);
  const yAxis = getYAxis(yScale, maxY, marginAdjustedWidth);

  const uniqueStatusValues = Array.from(new Set(data.map(datum => datum.status)));

  return (
    <Background width={width} height={height} margin={margin}>
      <Legend
        values={uniqueStatusValues}
        style={{ transform: `translateY(${-margin / 2.0}px)` }}
      />
      <g
        className="xAxis"
        style={{ transform: `translateY(${marginAdjustedHeight}px)` }}
        ref={node => select(node).call(xAxis)}
      />
      <g
        className="yAxis"
        ref={node => select(node).call(yAxis)}
      />
      {data.map(datum => (
        <Point
          key={`${datum.start_time} ${datum.duration} ${datum.status}`}
          data={datum}
          xScale={xScale}
          yScale={yScale}
        />
      ))}
    </Background>
  );
};

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
