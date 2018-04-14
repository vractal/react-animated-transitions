# react-animated-transitions

[![npm version](https://badge.fury.io/js/react-animated-transitions.svg)](https://badge.fury.io/js/react-animated-transitions)

<img src="https://raw.githubusercontent.com/sonaye/react-animated-transitions/master/demo.gif" width="600">

## Installation

`yarn add react-transition-group animate.css react-animated-transitions`

`animate.css` is optional, but without it you will have to write your own transition presets. The package includes only a single preset out of the box (fade transition).

## Usage

```javascript
import Animated from 'react-animated-transitions';

// animates a child
<Animated>
  <Foo />
</Animated>

// animates a group of children
<Animated items>
  {foos.map(() => <Animated item><Foo /></Animated>)}
</Animated>
```

### Usage with `animate.css` transition presets

[List of available animations](https://github.com/daneden/animate.css/blob/master/animate-config.json) in `animate.css`.

```javascript
import 'animate.css'; // once, you don't need it if you are using your custom presets
// you can also create a custom build with only the presets you are using

<Animated enter="fadeIn" exit="fadeOut" /> // default, this is equivalent to just <Animated />
<Animated enter="tada" exit="zoomOut" /> // you can use any combination
```

Presets are not needed for `<Animated items />`, you can use them with `<Animated />` and `<Animated item />`.

### Usage with a custom transition preset

To pass a custom preset, you need to add its css first, which is based on [react-transition-group](https://github.com/reactjs/react-transition-group).

```css
/* foo.css */

.foo-appear,
.foo-enter {
  /* transition state at 0% */
}

.foo-appear-active,
.foo-enter-active {
  /* transition state at 100% */
  /* transition definition */
}

.foo-exit {
  /* transition state at 100% */
}

.foo-exit-active {
  /* transition state at 0% */
  /* transition definition */
}

/* take a look at the included fade preset source to get an idea */
```

Then in your JavaScript:

```javascript
import './foo.css';

<Animated custom="foo" />; // notice that foo is the used as unique identifier in the css
```

### Passing a custom timeout

The timeout should be in ms and should match the css.

```javascript
<Animated timeout={1000} /> // default
```

### Overwriting `animate.css` duration and delay props

`animate.css` presets have a default timeout of 1000ms.

```css
/* overwrite.css */

/* global */
.animated {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}

/* specific */
.animated.fadeIn {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

```javascript
import './overwrite.css'; // make sure you include animate.css before this line

<Animated timeout={3000} />;
```

## Example

[![Edit 4ron7o8157](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4ron7o8157)

Available [here](https://github.com/sonaye/react-animated-transitions/tree/master/src/example).
