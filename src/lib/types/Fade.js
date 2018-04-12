import PropTypes from 'prop-types';
import styled from 'styled-components';

import Transition from '../Transition';

const Fade = styled(Transition)`
  &.appear,
  &.enter {
    opacity: 0;
  }

  &.appear-active,
  &.enter-active {
    opacity: 1;
    transition: opacity ${props => props.timeout}ms ease-in;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity ${props => props.timeout}ms ease-out;
  }
`;

Fade.propTypes = {
  timeout: PropTypes.number
};

Fade.defaultProps = {
  timeout: 400
};

export default Fade;
