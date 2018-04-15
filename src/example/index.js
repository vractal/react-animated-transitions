import React, { Component } from 'react';

import lorem from 'lorem-ipsum';

import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import 'animate.css';

import Animated from '../lib/Animated';

import animations from './animations';

export default class Example extends Component {
  state = {
    enter: 'fadeIn',
    exit: 'fadeOut',
    list: ['Hello World!'],
    random: true
  };

  setEnter = enter => this.setState({ enter, enterAnchorEl: null });
  setExit = exit => this.setState({ exit, exitAnchorEl: null });

  enterOpen = e => this.setState({ enterAnchorEl: e.currentTarget });
  enterClose = () => this.setState({ enterAnchorEl: null });

  exitOpen = e => this.setState({ exitAnchorEl: e.currentTarget });
  exitClose = () => this.setState({ exitAnchorEl: null });

  random = () => {
    this.setEnter(
      animations.in[Math.floor(Math.random() * animations.in.length)]
    );
    this.setExit(
      animations.out[Math.floor(Math.random() * animations.in.length)]
    );
  };

  add = () =>
    this.setState(
      { list: this.state.list.concat(lorem()) },
      () => this.state.random && this.random()
    );

  clear = () => this.setState({ list: [] });

  remove = item =>
    this.setState(
      { list: this.state.list.filter(i => item !== i) },
      () => this.state.random && this.random()
    );

  toggleRandom = () => this.setState({ random: !this.state.random });

  render() {
    const {
      enter,
      enterAnchorEl,
      exit,
      exitAnchorEl,
      list,
      random
    } = this.state;

    const transition = {
      enter,
      exit
    };

    return (
      <Animated {...transition}>
        <div style={styles.container}>
          <div style={styles.row}>
            <Button onClick={this.add} style={styles.btn} variant="raised">
              Add
            </Button>

            <Button
              disabled={list.length === 0}
              onClick={this.clear}
              style={styles.btn}
              variant="raised">
              Clear
            </Button>

            <Button
              aria-haspopup
              aria-owns="enter"
              onClick={this.enterOpen}
              style={{ ...styles.btn, ...{ width: 150 } }}>
              {enter}
            </Button>

            <Button
              aria-haspopup
              aria-owns="exit"
              onClick={this.exitOpen}
              style={{ ...styles.btn, ...{ width: 150 } }}>
              {exit}
            </Button>

            <Button onClick={this.toggleRandom} style={styles.btn}>
              {random ? 'Disable' : 'Enable'} random
            </Button>

            <Menu
              anchorEl={enterAnchorEl}
              id="enter"
              onClose={this.enterClose}
              open={Boolean(enterAnchorEl)}>
              {animations.in.map((animation, i) => (
                <MenuItem
                  key={i}
                  onClick={() => this.setEnter(animation)}
                  value={animation}>
                  {animation}
                </MenuItem>
              ))}
            </Menu>

            <Menu
              anchorEl={exitAnchorEl}
              id="exit"
              onClose={this.exitClose}
              open={Boolean(exitAnchorEl)}>
              {animations.out.map((animation, i) => (
                <MenuItem
                  key={i}
                  onClick={() => this.setExit(animation)}
                  value={animation}>
                  {animation}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div />

          <List>
            <Animated items>
              {list.map(item => (
                <Animated key={item} {...transition} item>
                  <Paper square style={styles.paper}>
                    <ListItem button onClick={() => this.remove(item)}>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Paper>
                </Animated>
              ))}
            </Animated>
          </List>

          <Animated {...transition}>
            <Animated items>
              {list.length > 0 && (
                <Animated {...transition} item>
                  <Typography variant="caption">
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
    borderRadius: 0,
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    margin: 5
  },
  paper: {
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
    marginTop: 10,
    width: 300
  },
  row: { display: 'flex' }
};
