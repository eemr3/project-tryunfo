import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import Button from '../Button/Button';
import InputImage from '../InputImage/InputImage';

import './Form.css';

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
        Super Trybe Trunfo
        <input
          className="form-check-input form-check-label"
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
            className="input-card-name"
          >
            Nome
          </Input>
          <TextArea
            textId="text-descr"
            textValue={ cardDescription }
            onInputChange={ onInputChange }
            textInfo="cardDescription"
            className="text-card-description"
          >
            Descrição
          </TextArea>
          <div className="attr-container">
            <Input
              inputId="input-attr1"
              nameInput="cardAttr1"
              typeInput="number"
              dataTest="attr1-input"
              inputValue={ cardAttr1 }
              onInputChange={ onInputChange }
              className="form-control input-attr-card"
            >
              Attr01

            </Input>
          </div>
          <div className="attr-container">
            <Input
              inputId="input-attr2"
              nameInput="cardAttr2"
              typeInput="number"
              dataTest="attr2-input"
              inputValue={ cardAttr2 }
              onInputChange={ onInputChange }
              className="form-control input-attr-card"
            >
              Attr02
            </Input>
          </div>
          <div className="attr-container">
            <Input
              inputId="input-attr3"
              nameInput="cardAttr3"
              typeInput="number"
              dataTest="attr3-input"
              inputValue={ cardAttr3 }
              onInputChange={ onInputChange }
              className="form-control input-attr-card"
            >
              Attr03
            </Input>
          </div>

          <InputImage
            onInputChange={ onInputChange }
            inputValue={ cardImage }
          />

          <div className="select-content">
            <Select
              sltId="select-rarity"
              dataTest="rare-input"
              sltValue={ cardRare }
              onInputChange={ onInputChange }
              sltName="cardRare"
              all={ false }
              defaltRarity={ false }
              className="select-rarity "
            >
              Raridade
            </Select>
          </div>
          <div className="container-check">
            {
              hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : inputCheckBox
            }
          </div>

          <Button
            dataTestBtn="save-button"
            isDisabled={ isSaveButtonDisabled }
            typeBtn="submit"
            onClick={ () => {} }
            className="button-save"
          >
            Salvar
          </Button>
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
