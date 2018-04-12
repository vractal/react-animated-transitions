import React, { Component } from 'react';

import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import lorem from 'lorem-ipsum';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Animated from '../lib/Animated';

export default class Example extends Component {
  state = { list: ['Hello World!'] };

  add = () => this.setState({ list: this.state.list.concat(lorem()) });

  remove = item =>
    this.setState({
      list: this.state.list.filter(i => item !== i)
    });

  render() {
    return (
      <Animated /* fade on mount a single node */>
        <div style={styles.container}>
          <Button onClick={this.add} style={styles.btn} variant="raised">
            Add
          </Button>

          <List>
            <Animated items /* fade on mount/unmount a list of nodes */>
              {this.state.list.map(item => (
                <Animated key={item} item>
                  <Paper square style={styles.paper}>
                    <ListItem button onClick={() => this.remove(item)}>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Paper>
                </Animated>
              ))}
            </Animated>
          </List>

          <Animated /* fade on mount/unmount a single conditional node */>
            <Animated items>
              {this.state.list.length > 0 && (
                <Animated item>
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
  btn: { boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)', borderRadius: 0 },
  paper: {
    boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
    marginTop: 10,
    width: 300
  },
  caption: { color: 'white', marginBottom: 40 }
};
