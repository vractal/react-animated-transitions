import React from 'react';

import { CSSTransition } from 'react-transition-group';

const Transition = props => (
  <CSSTransition
    unmountOnExit
    classNames={{
      appear: 'appear',
      appearActive: 'appear-active',
      enter: 'enter',
      enterActive: 'enter-active',
      exit: 'exit',
      exitActive: 'exit-active'
    }}
    {...props}
  />
);

export default Transition;
