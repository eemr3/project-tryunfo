import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

import './App.css';
import Input from './components/Input/Input';

class App extends React.Component {
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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newDeck: [],
      isDeleteButton: true,
      searchCard: '',
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.checkedValidation = this.checkedValidation.bind(this);
    this.validationForm = this.validationForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDelete(cardTitle) {
    this.setState((prevState) => ({
      newDeck: prevState.newDeck.filter((card) => card.cardName !== cardTitle),
      cardTrunfo: false,
      hasTrunfo: false,
    }));
  }

  handleSearch({ target: { value } }) {
    this.setState({ searchCard: value });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.checkedValidation();
      this.validationForm();
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState((prevState) => ({
      newDeck: [...prevState.newDeck, { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      hasTrunfo: prevState.cardTrunfo,
    }));
  }

  checkedValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const isEmpty = [
      !cardName,
      !cardDescription,
      !cardImage,
      !cardRare];
    const formIsEmpty = isEmpty.every((empty) => empty !== true);
    return formIsEmpty;
  }

  validationForm() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const minMax = [
      cardAttr1,
      cardAttr2,
      cardAttr3];
    const resultValue = minMax.every((value) => (!(value < '0' || value > '90')));
    const sum = minMax.reduce((acc, curr) => Number(acc) + Number(curr));
    const maxAttr = 210;
    const teste = sum > maxAttr;
    const result = resultValue && this.checkedValidation() && !teste;
    this.setState({ isSaveButtonDisabled: !result });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      newDeck,
      isDeleteButton,
      searchCard,
    } = this.state;

    return (
      <main className="container">
        <section className="container-form-card">
          <div className="form-container">
            <Form
              cardName={ cardName }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              onInputChange={ this.onInputChange }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }

            />
          </div>
          <div className="preview-container">
            <h2>Pré-visualização</h2>
            <div>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                isVisible={ false }
                handleDelete={ () => {} }
              />
            </div>
          </div>
        </section>
        <section className="list-card">
          <div>
            <Input
              inputId="searchCard"
              nameInput="searchCard"
              typeInput="text"
              dataTest="name-filter"
              inputValue={ searchCard }
              onInputChange={ this.handleSearch }
            >
              Nome da carta
            </Input>
          </div>
          {this.onSaveButtonClick
          && newDeck.filter((card) => card.cardName.includes(searchCard)).map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                isVisible={ isDeleteButton }
                handleDelete={ this.handleDelete }
              />
            </div>
          ))}
        </section>
      </main>
    );
  }
}

export default App;
