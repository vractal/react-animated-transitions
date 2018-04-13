# react-animated-transitions

[![npm version](https://badge.fury.io/js/react-animated-transitions.svg)](https://badge.fury.io/js/react-animated-transitions)

<img src="https://raw.githubusercontent.com/sonaye/react-animated-transitions/master/demo.gif" width="400">

# Installation

`yarn add react-transition-group react-animated-transitions`

# Usage

```javascript
import Animated from 'react-animated-transitions';

// fade on mount a single node
<Animated>
  <Node />
</Animated>;

// fade on mount/unmount a list of nodes
<Animated items>
  {nodes.map(node => (
    <Animated key={node} item>
      <Node />
    </Animated>
  ))}
</Animated>;
```

## Example

[![Edit 4ron7o8157](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4ron7o8157)

Available [here](https://github.com/sonaye/react-animated-transitions/tree/master/src/example).
