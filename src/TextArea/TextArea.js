import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      textInfo,
      textId,
      children,
      textValue,
      onInputChange,
      className } = this.props;
    return (
      <label htmlFor={ textId } className="container-label">
        {children}
        <textarea
          name={ textInfo }
          id={ textId }
          cols="30"
          rows="10"
          data-testid="description-input"
          maxLength="177"
          value={ textValue }
          onChange={ onInputChange }
          className={ className }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  textInfo: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  className: '',
};
export default TextArea;
