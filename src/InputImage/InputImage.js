/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgemLink from '../../images/insert_link_24px.svg';

class InputImage extends Component {
  render() {
    const { inputValue, onInputChange } = this.props;
    return (
      <div className="input-imagem">
        <label
          htmlFor="input-image"
        >
          Imagem
        </label>
        <div className="input-group">
          <div className="input-group-prepend">
            <img src={ ImgemLink } alt="Link imagem" />
          </div>
          <input
            data-testid="image-input"
            name="cardImage"
            type="text"
            className="form-control"
            id="input-image"
            onChange={ onInputChange }
            value={ inputValue }
          />
        </div>
      </div>
    );
  }
}

InputImage.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputImage;
