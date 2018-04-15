import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import Animated from '../lib/Animated';

import './overwrite.css';

export default class Basic extends Component {
  state = { show: true };

  toggle = () => this.setState({ show: !this.state.show });

  render() {
    const transition = { timeout: 500 };

    return (
      <Animated {...transition}>
        <div style={styles.container}>
          <Animated {...transition} items>
            {this.state.show && (
              <Animated {...transition} item>
                <Paper style={styles.circle} />
              </Animated>
            )}
          </Animated>

          <Button onClick={this.toggle} style={styles.btn} variant="raised">
            Toggle
          </Button>
        </div>
      </Animated>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  circle: {
    borderRadius: 120,
    boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.1)',
    height: 240,
    marginBottom: 40,
    width: 240
  },
  btn: {
    borderRadius: 0,
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)'
  }
};
