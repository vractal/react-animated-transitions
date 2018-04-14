import React, { Component } from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

class Transition extends Component {
  static propTypes = {
    enter: PropTypes.string,
    exit: PropTypes.string,
    item: PropTypes.bool.isRequired,
    preset: PropTypes.string,
    timeout: PropTypes.number.isRequired
  };

  static defaultProps = {
    enter: undefined,
    exit: undefined,
    preset: undefined
  };

  state = { in: false };

  componentDidMount() {
    if (!this.props.item) this.setState({ in: true });
  }

  render() {
    const { enter, exit, item, preset, ...props } = this.props;

    return (
      <CSSTransition
        {...props}
        classNames={
          preset || {
            appear: 'animated',
            appearActive: enter,
            enter: 'animated',
            enterActive: enter,
            exit: 'animated',
            exitActive: exit
          }
        }
        {...!item && { in: this.state.in }}
      />
    );
  }
}

export default Transition;
