import React from 'react';

import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Transition from './Transition';

import './fade.css';

const Animated = ({ disabled, items, ...props }) => {
  if (disabled) return props.children;

  if (items) return <TransitionGroup>{props.children}</TransitionGroup>;

  const { enter, exit, preset, timeout } = props;

  // avoid mutating params
  const propsCopy = props;

  // default animation is fadeIn/fadeOut
  if (!preset && !(enter || exit)) {
    propsCopy.enter = 'react-animated-transitions-fadeIn';
    propsCopy.exit = 'react-animated-transitions-fadeOut';
  }

  // if only animate on enter
  if (enter && !exit)
    propsCopy.timeout = {
      enter: timeout,
      exit: 0
    };

  // if only animate on exit
  if (!enter && exit)
    propsCopy.timeout = {
      enter: 0,
      exit: timeout
    };

  return <Transition {...propsCopy} />;
};

Animated.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  enter: PropTypes.string,
  exit: PropTypes.string,
  item: PropTypes.bool,
  items: PropTypes.bool,
  preset: PropTypes.string,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number })
  ])
};

Animated.defaultProps = {
  disabled: false,
  enter: undefined,
  exit: undefined,
  item: false,
  items: false,
  preset: undefined,
  timeout: 1000
};

export default Animated;
