import React from 'react';

import Transition from '../Transition';

import './SlideRight.css';

const SlideRight = props => (
  <Transition {...props} classNames="slideRight" timeout={400} />
);

export default SlideRight;
