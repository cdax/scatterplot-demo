
import React from 'react';
import PropTypes from 'prop-types';

import { PlotPointType } from './types';
import { StatusColors, DefaultPointSize } from './constants';


class Point extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    const {
      data,
      xScale,
      yScale,
      size,
    } = this.props;
    const { selected } = this.state;
    const attrs = {
      cx: xScale(new Date(data.start_time)),
      cy: yScale(data.duration),
      r: size,
      style: {
        fill: StatusColors[data.status],
        filter: selected ? 'url(#shadow)' : '',
      },
    };
    if (selected) {
      attrs.stroke = 'white';
      attrs.strokeWidth = 2;
    }
    return <circle {...attrs} onClick={() => this.setState({ selected: !selected })} />;
  }
}

Point.propTypes = {
  data: PlotPointType.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  size: PropTypes.number,
};

Point.defaultProps = {
  size: DefaultPointSize,
};

export default Point;
