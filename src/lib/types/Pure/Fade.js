import React from 'react';

import Transition from '../../Transition';

import './Fade.css';

const Fade = props => <Transition {...props} classNames="fade" timeout={400} />;

export default Fade;
