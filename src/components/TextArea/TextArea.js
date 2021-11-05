import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { textInfo, textId, children } = this.props;
    return (
      <label htmlFor={ textId } className="container-label">
        {children}
        <textarea
          name={ textInfo }
          id={ textId }
          cols="30"
          rows="10"
          data-testid="description-input"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  textInfo: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default TextArea;
