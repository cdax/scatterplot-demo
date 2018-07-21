
import React from 'react';

import { PlotPointType } from './types';


const PlotPoint = ({ data }) => (
  <div>
    TODO: PlotPoint, Start Date: {data.start_date}, Duration: {data.duration}, Status: {data.status}
  </div>
);

PlotPoint.propTypes = {
  data: PlotPointType.isRequired,
};

export default PlotPoint;
