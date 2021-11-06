import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isDisabled, typeBtn, dataTestBtn } = this.props;

    return (
      <button
        data-testid={ dataTestBtn }
        type={ typeBtn === 'submit' ? 'submit' : 'button' }
        disabled={ isDisabled }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  typeBtn: PropTypes.string.isRequired,
  dataTestBtn: PropTypes.string.isRequired,
};
export default Button;
