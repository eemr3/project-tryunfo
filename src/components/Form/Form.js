import React, { Component } from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';

import './Form.css';
import Button from '../Button/Button';

class Form extends Component {
  render() {
    return (
      <section className="container-form">
        <form>
          <Input typeInput="text" dataTest="name-input">Nome</Input>
          <TextArea>Descriçã</TextArea>
          <Input typeInput="number" dataTest="attr1-input">Attr01</Input>
          <Input typeInput="number" dataTest="attr2-input">Attr02</Input>
          <Input typeInput="number" dataTest="attr3-input">Attr03</Input>
          <Input typeInput="text" dataTest="image-input">Imagem</Input>
          <Select sltId="select-rarity" dataTest="rare-input">Raridade</Select>
          <Input typeInput="checkbox" dataTest="trunfo-input">Super Trybe Trunfo</Input>
          <Button />
        </form>
      </section>
    );
  }
}

export default Form;
