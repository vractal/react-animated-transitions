import React from 'react';

import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Transition from './Transition';

import './presets/Fade.css';
import './presets/Scale.css';
import './presets/SlideLeft.css';
import './presets/SlideRight.css';

const presets = ['fade', 'scale', 'slideLeft', 'slideRight'];

const Animated = ({ items, ...props }) => {
  if (items)
    return <TransitionGroup {...props} item={props.item || undefined} />;

  const { preset, timeout } = props;

  if (presets.includes(preset) && timeout !== 400)
    throw new Error('Timeout must be 400ms for included presets');

  return <Transition {...props} />;
};

Animated.propTypes = {
  children: PropTypes.any.isRequired,
  item: PropTypes.bool,
  items: PropTypes.bool,
  preset: PropTypes.string,
  timeout: PropTypes.number
};

Animated.defaultProps = {
  item: false,
  items: false,
  preset: 'fade',
  timeout: 400
};

export default Animated;
