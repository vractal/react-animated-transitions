import React from 'react';

import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import TransitionItem from './TransitionItem';

import Fade from './types/Fade';

const types = {
  fade: Fade
};

const Animated = ({ items, type, ...props }) => {
  if (items) return <TransitionGroup>{props.children}</TransitionGroup>;

  return <TransitionItem {...props} Type={types[type]} />;
};

Animated.propTypes = {
  children: PropTypes.any.isRequired,
  item: PropTypes.bool,
  items: PropTypes.bool,
  // todo: don't throw for <Animated items />
  type: PropTypes.oneOf(Object.keys(types)) // .isRequired
};

Animated.defaultProps = {
  item: false,
  items: false,
  type: 'fade'
};

export default Animated;
