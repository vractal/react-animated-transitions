import React from 'react';
import PropTypes from 'prop-types';

import Transition from '../../Transition';

import './Fade.css';

const Fade = props => <Transition {...props} classNames="fade" />;

Fade.propTypes = {
  timeout: PropTypes.number
};

Fade.defaultProps = {
  timeout: 400
};

export default Fade;
