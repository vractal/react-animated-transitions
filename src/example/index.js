import React, { Component } from 'react';

import lorem from 'lorem-ipsum';

import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Animated from '../lib/Animated';

import './custom.css';

export default class Example extends Component {
  state = { list: ['Hello World!'], preset: 'fade', timeout: 400 };

  add = () => this.setState({ list: this.state.list.concat(lorem()) });

  clear = () => this.setState({ list: [] });

  remove = item =>
    this.setState({
      list: this.state.list.filter(i => item !== i)
    });

  renderPreset = preset => (
    <Button
      disabled={this.state.preset === preset}
      onClick={() =>
        this.setState({ preset, timeout: preset === 'custom' ? 1000 : 400 })
      }
      style={styles.btn}>
      {preset}
    </Button>
  );

  render() {
    const { list, preset, timeout } = this.state;

    return (
      <Animated preset={preset} timeout={timeout}>
        <div style={styles.container}>
          <div style={styles.row}>
            <Button onClick={this.add} style={styles.btn} variant="raised">
              Add
            </Button>

            <Button
              disabled={this.state.list.length === 0}
              onClick={this.clear}
              style={styles.btn}
              variant="raised">
              Clear
            </Button>

            {this.renderPreset('fade')}
            {this.renderPreset('scale')}
            {this.renderPreset('slideLeft')}
            {this.renderPreset('slideRight')}
            {this.renderPreset('custom')}
          </div>

          <List>
            <Animated items>
              {list.map(item => (
                <Animated preset={preset} timeout={timeout} key={item} item>
                  <Paper square style={styles.paper}>
                    <ListItem button onClick={() => this.remove(item)}>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Paper>
                </Animated>
              ))}
            </Animated>
          </List>

          <Animated preset={preset} timeout={timeout}>
            <Animated items>
              {list.length > 0 && (
                <Animated preset={preset} timeout={timeout} item>
                  <Typography variant="caption" style={styles.caption}>
                    Click an item to remove it
                  </Typography>
                </Animated>
              )}
            </Animated>
          </Animated>
        </div>
      </Animated>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 40
  },
  btn: {
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 0,
    margin: 5
  },
  paper: {
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
    marginTop: 10,
    width: 300
  },
  caption: { marginBottom: 40 },
  row: {
    display: 'flex'
  }
};
