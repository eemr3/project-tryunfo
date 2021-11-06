import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isDisabled } = this.props;
    return (
      <button
        type="submit"
        data-testid="save-button"
        disabled={ isDisabled }
      >
        Salvar

      </button>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};
export default Button;
