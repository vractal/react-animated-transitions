import React, { Component } from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

class Transition extends Component {
  static propTypes = {
    item: PropTypes.bool.isRequired,
    preset: PropTypes.string.isRequired
  };

  state = { in: false };

  componentDidMount() {
    this.setState({ in: true });
  }

  render() {
    const { item, preset, ...props } = this.props;

    return (
      <CSSTransition
        {...props}
        classNames={preset}
        {...!item && { in: this.state.in }}
      />
    );
  }
}

export default Transition;
