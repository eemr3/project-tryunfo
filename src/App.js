import React from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import ListCards from './components/ListCards/ListCards';
import data from './data/CardData';

import './App.css';

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
      newDeck: data,
      isDeleteButton: true,
      searchCard: {
        nameCard: '',
        rareCard: 'todas',
        trunfoCard: false,
      },
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.checkedValidation = this.checkedValidation.bind(this);
    this.validationForm = this.validationForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getFilterCard = this.getFilterCard.bind(this);
  }

  componentDidMount() {
    this.resetHasTrunfo();
  }

  handleDelete(cardTitle) {
    this.setState((prevState) => ({
      newDeck: prevState.newDeck.filter((card) => card.cardName !== cardTitle),
      cardTrunfo: false,
      hasTrunfo: false,
    }));
  }

  handleSearch({ target }) {
    const { searchCard } = this.state;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ searchCard: { ...searchCard, [name]: value } });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.checkedValidation();
      this.validationForm();
    });
  }

  onsSave() {
    return this.state;
  }

  onSaveButtonClick(event) {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    event.preventDefault();
    this.setState((prevState) => ({
      newDeck: prevState.newDeck.concat({ cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: cardTrunfo === true ? prevState.cardTrunfo : !prevState.cartTrunfo,
    }));
  }

  getFilterCard() {
    const { newDeck, searchCard: {
      nameCard,
      rareCard,
      trunfoCard,
    } } = this.state;
    return newDeck.filter((card) => (nameCard === '' ? newDeck
      : card.cardName.includes(nameCard)))
      .filter((card) => (rareCard === 'todas' ? newDeck : card.cardRare === rareCard))
      .filter((card) => (card.cardTrunfo === trunfoCard ? newDeck : !trunfoCard));
  }

  resetHasTrunfo = () => {
    this.setState((prevState) => ({ hasTrunfo: prevState.newDeck
      .some((trunfo) => trunfo.cardTrunfo) }));
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
    const sumAttr = sum > maxAttr;
    const result = resultValue && this.checkedValidation() && !sumAttr;
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
      isDeleteButton,
      searchCard: {
        nameCard, rareCard,
        trunfoCard,

      },
    } = this.state;
    const resultGetFilter = this.getFilterCard();

    return (
      <main className="container-app">
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
            <div>
              <h2>Pré-visualização</h2>
            </div>
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
              isDeleteButton={ false }
            />
          </div>
        </section>
        <ListCards
          nameCard={ nameCard }
          rareCard={ rareCard }
          trunfoCard={ trunfoCard }
          resultGetFilter={ resultGetFilter }
          isDeleteButton={ isDeleteButton }
          handleDelete={ this.handleDelete }
          onSaveButtonClick={ this.onSaveButtonClick }
          handleSearch={ this.handleSearch }

        />
      </main>
    );
  }
}

export default App;
