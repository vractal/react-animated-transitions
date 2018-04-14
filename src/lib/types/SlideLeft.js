import React from 'react';

import Transition from '../Transition';

import './SlideLeft.css';

const SlideLeft = props => (
  <Transition {...props} classNames="slideLeft" timeout={400} />
);

export default SlideLeft;
