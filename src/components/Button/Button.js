import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { isDisabled, typeBtn, dataTestBtn, children, onClick } = this.props;

    return (
      <button
        data-testid={ dataTestBtn }
        type={ typeBtn === 'submit' ? 'submit' : 'button' }
        disabled={ isDisabled }
        onClick={ onClick }
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  typeBtn: PropTypes.string.isRequired,
  dataTestBtn: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
