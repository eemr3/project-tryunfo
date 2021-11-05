import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onSaveButtonClick, isDisabled } = this.props;
    return (
      <button
        type="button"
        data-testid="save-button"
        onClick={ onSaveButtonClick }
        disabled={ isDisabled }
      >
        Salvar

      </button>
    );
  }
}

Button.propTypes = {
  onSaveButtonClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
export default Button;
