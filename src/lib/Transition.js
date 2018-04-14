import React, { Component } from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

class Transition extends Component {
  static propTypes = {
    item: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
  };

  state = { in: false };

  componentDidMount() {
    this.setState({ in: true });
  }

  render() {
    const { item, type, ...props } = this.props;

    // experimenting with passing multiple presets, not good so far

    // const classNames = {
    //   appear: '',
    //   appearActive: '',
    //   enter: '',
    //   enterActive: '',
    //   exit: '',
    //   exitActive: ''
    // };

    // type.split(' ').forEach(t => {
    //   classNames.appear += `${t}-appear `;
    //   classNames.appearActive += `${t}-appear-active `;
    //   classNames.enter += `${t}-enter `;
    //   classNames.enterActive = `${t}-enter-active `;
    //   classNames.exit += `${t}-exit `;
    //   classNames.exitActive += `${t}-exit-active `;
    // });

    // Object.keys(classNames).forEach(
    //   k => (classNames[k] = classNames[k].trim())
    // );

    return (
      <CSSTransition
        {...props}
        classNames={type}
        {...!item && { in: this.state.in }}
      />
    );
  }
}

export default Transition;
