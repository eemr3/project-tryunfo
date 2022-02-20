function onSaveButtonClick(event) {
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
  return this.setState((prevState) => ({
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
export default onSaveButtonClick;
