import React from 'react';

import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Transition from './Transition';

import './presets/Fade.css';
import './presets/Scale.css';
import './presets/SlideLeft.css';
import './presets/SlideRight.css';

const Animated = ({ items, ...props }) => {
  if (items)
    return <TransitionGroup {...props} item={props.item || undefined} />;

  return <Transition {...props} timeout={400} />;
};

Animated.propTypes = {
  children: PropTypes.any.isRequired,
  item: PropTypes.bool,
  items: PropTypes.bool,
  preset: PropTypes.oneOf(['fade', 'scale', 'slideLeft', 'slideRight'])
};

Animated.defaultProps = {
  item: false,
  items: false,
  preset: 'fade'
};

export default Animated;
