import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Button from './Button/Button';

class Card extends Component {
  render() {
    const bntDelete = (
      <Button
        dataTestBtn="delete-button"
        typeBtn="button"
        isDisabled={ false }
      >
        Excluir
      </Button>
    );
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isVisible } = this.props;
    return (
      <div className="container-cards">
        <div className="card-content">
          <h3 data-testid="name-card">{cardName}</h3>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{cardDescription}</p>
          <span data-testid="attr1-card">{cardAttr1}</span>
          <span data-testid="attr2-card">{cardAttr2}</span>
          <span data-testid="attr3-card">{cardAttr3}</span>
          <span data-testid="rare-card">{cardRare}</span>
          {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span> }
        </div>
        {isVisible && bntDelete}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
export default Card;
