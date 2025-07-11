import React from 'react';
import PropTypes from 'prop-types';
import './Inputbox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

function Inputbox({ placeholder }) {
  return (
    <div className="textinput-container">
      <input placeholder={placeholder} type="text" />
      <div className="input-error">
        <FontAwesomeIcon icon={faExclamation} />
        Error message
      </div>
    </div>
  );
}

Inputbox.propTypes = {
  placeholder: PropTypes.string,
};

Inputbox.defaultProps = {
  placeholder: 'Please enter any value',
};

export default Inputbox;
