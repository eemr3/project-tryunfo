import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      inputId,
      children,
      typeInput,
      dataTest,
      onInputChange,
      nameInput,
      inputValue,
    } = this.props;

    return (
      <label htmlFor={ inputId }>
        {children}
        <input
          id={ inputId }
          type={ typeInput }
          data-testid={ dataTest }
          onChange={ onInputChange }
          name={ nameInput }
          value={ inputValue }
          checked
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
};

export default Input;
