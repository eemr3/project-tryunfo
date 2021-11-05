import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      inputId,
      children,
      typeInput,
      dataTest,
    } = this.props;

    return (
      <label htmlFor={ inputId }>
        {children}
        <input
          id={ inputId }
          type={ typeInput }
          data-testid={ dataTest }
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  // nameInput: PropTypes.string.isRequired,
  // inputValue: PropTypes.string.isRequired,
  // handleChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default Input;
