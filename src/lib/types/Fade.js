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
    transition: opacity ${props => props.timeout}ms ease-in
      ${props => props.delay}ms;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity ${props => props.timeout}ms ease-out
      ${props => props.delay}ms;
  }
`;

Fade.propTypes = {
  delay: PropTypes.number,
  timeout: PropTypes.number
};

Fade.defaultProps = {
  delay: 0,
  timeout: 400
};

export default Fade;
