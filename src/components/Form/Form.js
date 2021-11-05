import React, { Component } from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';

import './Form.css';
import Button from '../Button/Button';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: '',
      // isSaveButtonDisabled: '',

    };
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSaveButtonClick() {}

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
      // hasTrunfo,
    } = this.state;
    return (
      <section className="container-form">
        <form>
          <Input
            inputId="cardName"
            nameInput="cardName"
            typeInput="text"
            dataTest="name-input"
            inputValue={ cardName }
            onInputChange={ this.onInputChange }
          >
            Nome
          </Input>
          <TextArea
            textId="text-descr"
            textValue={ cardDescription }
            onInputChange={ this.onInputChange }
            textInfo="card-description"
          >
            Descriçã
          </TextArea>
          <Input
            inputId="input-attr1"
            nameInput="cardAttr1"
            typeInput="number"
            dataTest="attr1-input"
            inputValue={ cardAttr1 }
            onInputChange={ this.onInputChange }

          >
            Attr01

          </Input>
          <Input
            inputId="input-attr2"
            nameInput="cardAttr2"
            typeInput="number"
            dataTest="attr2-input"
            inputValue={ cardAttr2 }
            onInputChange={ this.onInputChange }
          >
            Attr02
          </Input>
          <Input
            inputId="input-attr3"
            nameInput="cardAttr3"
            typeInput="number"
            dataTest="attr3-input"
            inputValue={ cardAttr3 }
            onInputChange={ this.onInputChange }
          >
            Attr03
          </Input>
          <Input
            inputId="input-image"
            nameInput="cardImage"
            typeInput="text"
            dataTest="image-input"
            inputValue={ cardImage }
            onInputChange={ this.onInputChange }
          >
            Imagem
          </Input>
          <Select
            sltId="select-rarity"
            dataTest="rare-input"
            sltValue={ cardRare }
            onInputChange={ this.onInputChange }
          >
            Raridade
          </Select>
          <Input
            nameInput="cardTrunfo"
            inputId="input-trunfo"
            typeInput="checkbox"
            dataTest="trunfo-input"
            inputValue={ cardTrunfo }
            onInputChange={ this.onInputChange }
          >
            Super Trybe Trunfo
          </Input>
          <Button />
        </form>
      </section>
    );
  }
}

export default Form;
