import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Select from './Select/Select';

import './Form.css';
import Button from './Button/Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.props;

    const inputCheckBox = (
      <label htmlFor="input-trunfo">
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
      </label>
    );

    return (
      <section className="container-form">
        <form onSubmit={ onSaveButtonClick }>
          <Input
            inputId="cardName"
            nameInput="cardName"
            typeInput="text"
            dataTest="name-input"
            inputValue={ cardName }
            onInputChange={ onInputChange }
          >
            Nome
          </Input>
          <TextArea
            textId="text-descr"
            textValue={ cardDescription }
            onInputChange={ onInputChange }
            textInfo="cardDescription"
          >
            Descriçã
          </TextArea>
          <Input
            inputId="input-attr1"
            nameInput="cardAttr1"
            typeInput="number"
            dataTest="attr1-input"
            inputValue={ cardAttr1 }
            onInputChange={ onInputChange }

          >
            Attr01

          </Input>
          <Input
            inputId="input-attr2"
            nameInput="cardAttr2"
            typeInput="number"
            dataTest="attr2-input"
            inputValue={ cardAttr2 }
            onInputChange={ onInputChange }
          >
            Attr02
          </Input>
          <Input
            inputId="input-attr3"
            nameInput="cardAttr3"
            typeInput="number"
            dataTest="attr3-input"
            inputValue={ cardAttr3 }
            onInputChange={ onInputChange }
          >
            Attr03
          </Input>
          <Input
            inputId="input-image"
            nameInput="cardImage"
            typeInput="text"
            dataTest="image-input"
            inputValue={ cardImage }
            onInputChange={ onInputChange }
          >
            Imagem
          </Input>
          <Select
            sltId="select-rarity"
            dataTest="rare-input"
            sltValue={ cardRare }
            onInputChange={ onInputChange }
          >
            Raridade
          </Select>

          {
            hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : inputCheckBox
          }

          <Button
            onSaveButtonClick={ onSaveButtonClick }
            isDisabled={ isSaveButtonDisabled }
          />
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
export default Form;
