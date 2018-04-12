import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TransitionItem extends Component {
  static propTypes = {
    item: PropTypes.bool.isRequired,
    Type: PropTypes.func.isRequired
  };

  state = { in: undefined };

  componentDidMount() {
    this.setState({ in: true });
  }

  render() {
    const { item, Type, ...props } = this.props;

    return <Type {...props} {...!item && { in: this.state.in }} />;
  }
}

export default TransitionItem;
