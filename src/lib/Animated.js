import React from 'react';

import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Transition from './Transition';

import './fade.css';

const Animated = ({ items, ...props }) => {
  if (items) return <TransitionGroup>{props.children}</TransitionGroup>;

  if (!props.custom && !(props.enter || props.exit)) {
    props.custom = 'react-animated-transitions-fade';
    props.timeout = 400;
  }

  return <Transition {...props} />;
};

Animated.propTypes = {
  children: PropTypes.any.isRequired,
  custom: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  item: PropTypes.bool,
  items: PropTypes.bool,
  timeout: PropTypes.number
};

Animated.defaultProps = {
  custom: undefined,
  enter: undefined,
  exit: undefined,
  item: false,
  items: false,
  timeout: 1000
};

export default Animated;
