import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <main className="container">
        <section className="form-contaniner">
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
        </section>
        <section className="preview-container">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </main>
    );
  }
}

export default App;
