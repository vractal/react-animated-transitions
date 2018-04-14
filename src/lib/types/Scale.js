import React from 'react';

import Transition from '../Transition';

import './Scale.css';

const Scale = props => (
  <Transition {...props} classNames="scale" timeout={400} />
);

export default Scale;
