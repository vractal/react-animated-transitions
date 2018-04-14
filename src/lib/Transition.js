import React, { Component } from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

class Transition extends Component {
  static propTypes = {
    custom: PropTypes.string,
    enter: PropTypes.string,
    exit: PropTypes.string,
    item: PropTypes.bool.isRequired,
    timeout: PropTypes.number.isRequired
  };

  static defaultProps = {
    custom: undefined,
    enter: undefined,
    exit: undefined
  };

  state = { in: false };

  componentDidMount() {
    if (!this.props.item) this.setState({ in: true });
  }

  render() {
    const { custom, enter, exit, item, ...props } = this.props;

    // experimenting with passing multiple presets, no good

    // const classNames = {
    //   appear: 'animated',
    //   appearActive: '',
    //   enter: 'animated',
    //   enterActive: '',
    //   exit: 'animated',
    //   exitActive: ''
    // };

    // enter.split(' ').forEach(e => {
    //   classNames.appearActive += `${e} `;
    //   classNames.enterActive += `${e} `;
    // });

    // exit.split(' ').forEach(e => (classNames.exitActive += `${e} `));

    // Object.keys(classNames).forEach(
    //   k => (classNames[k] = classNames[k].trim())
    // );

    return (
      <CSSTransition
        {...props}
        classNames={
          custom || {
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
