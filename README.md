# react-animated-transitions

[![npm version](https://badge.fury.io/js/react-animated-transitions.svg)](https://badge.fury.io/js/react-animated-transitions)

<img src="https://raw.githubusercontent.com/sonaye/react-animated-transitions/master/demo.gif" width="600">

# Installation

`yarn add react-transition-group react-animated-transitions`

# Usage

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

// available presets
<Animated preset="fade" /> // default
<Animated preset="scale" />
<Animated preset="slideLeft" />
<Animated preset="slideRight" />
// want more presets out of the box? PRs are welcome!

// a preset is not needed for <Animated items />
// you can use a preset with <Animated /> and <Animated item />

// to pass a custom preset, you need to add its css first
// take a look a the css of the included presets to get an idea
// it is based on react-transition-group

// foo.css
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

// ..

import './foo.css';

<Animated preset="foo">
  <Bar />
</Animated>

// to pass a custom timeout in ms (it should match your css)
<Animated preset="foo" timeout={1000}>
  <Baz />
</Animated>
// included presets have a default 400ms timeout, you can customize your own presets only
```

## Example

[![Edit 4ron7o8157](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4ron7o8157)

Available [here](https://github.com/sonaye/react-animated-transitions/tree/master/src/example).
