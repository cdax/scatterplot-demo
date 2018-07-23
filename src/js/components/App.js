
import React from 'react';

import Scatterplot from './Scatterplot';


const plotpoints = [
  {
    start_time: '2017-11-29T04:56:12Z',
    status: 'pass',
    duration: 126, // in seconds
  },
  {
    start_time: '2017-11-28T03:22:12Z',
    status: 'error',
    duration: 205,
  },
  {
    start_time: '2017-11-28T02:24:12Z',
    status: 'fail',
    duration: 20,
  },
  {
    start_time: '2017-11-19T05:24:12Z',
    status: 'pass',
    duration: 90,
  },
  {
    start_time: '2017-11-21T06:24:12Z',
    status: 'error',
    duration: 90,
  },
  {
    start_time: '2017-11-20T14:12:12Z',
    status: 'pass',
    duration: 320,
  },
  {
    start_time: '2017-11-23T02:24:12Z',
    status: 'fail',
    duration: 20,
  },
  {
    start_time: '2017-11-25T05:24:12Z',
    status: 'pass',
    duration: 90,
  },
  {
    start_time: '2017-11-24T06:24:12Z',
    status: 'error',
    duration: 90,
  },
  {
    start_time: '2017-11-30T14:12:12Z',
    status: 'pass',
    duration: 200,
  },
];


const App = () => (
  <div>
    <Scatterplot data={plotpoints} />
  </div>
);


export default App;
