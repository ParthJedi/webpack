import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ title }) {
  return <button type="button">{title}</button>;
}
Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: 'Renadom Btn Text',
};
export default Button;
