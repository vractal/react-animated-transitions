// NOTE: this example is not complete, still glitchy

import React, { PureComponent } from 'react';

import Paper from 'material-ui/Paper';

import Animated from '../lib/Animated';

const boxHeight = 64;
const boxMargin = 32;

const minBoxesToShow = Math.floor(window.innerHeight / (boxHeight + boxMargin));

export default class Reveal extends PureComponent {
  state = {
    boxes: Array(32).fill(),
    reveal: []
  };

  componentDidMount() {
    this.setState({
      reveal: [...Array(minBoxesToShow).keys()]
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const extraMarginPixels =
      (this.state.reveal.length - (minBoxesToShow - 1)) * boxMargin;

    const isScrollingDown = e.srcElement.body.scrollTop > extraMarginPixels;

    const hasBoxesLeft = this.state.reveal.length < this.state.boxes.length;

    if (isScrollingDown && hasBoxesLeft)
      this.setState(state => ({
        reveal: [...Array(state.reveal.length + 1).keys()]
      }));
  };

  render() {
    const { boxes, reveal } = this.state;

    const extraHeightPixels =
      (reveal.length - (minBoxesToShow - 1)) * boxHeight;

    const minHeight = `calc(100% + ${extraHeightPixels}px)`;

    const containerStyle = Object.assign({}, styles.container, { minHeight });

    return (
      <div style={containerStyle}>
        <Animated items>
          {boxes.map(
            (box, i) =>
              reveal.indexOf(i) !== -1 && (
                <Animated key={i} item>
                  <Paper style={styles.box} />
                </Animated>
              )
          )}
        </Animated>
      </div>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  box: {
    boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.1)',
    height: boxHeight,
    marginBottom: boxMargin,
    marginTop: boxMargin,
    width: boxHeight * 4
  }
};
