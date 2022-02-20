/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgTrunfo from '../../images/Group2241.png';
import Button from '../Button/Button';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      handleDelete,
      isDeleteButton,
    } = this.props;

    const bntDelete = (cardTitle) => (
      <Button
        dataTestBtn="delete-button"
        typeBtn="button"
        isDisabled={ false }
        onClick={ () => handleDelete(cardTitle) }
      >
        Excluir
      </Button>
    );

    const attr = 'Attr................................................... ';
    return (
      <div className="content-card-button">
        <div className="container-card">
          <div className="card-content">
            <div className="title-content">
              <h3 data-testid="name-card">{cardName}</h3>
            </div>
            <div className="image-content">
              <img
                data-testid="image-card"
                src={ cardImage }
                alt={ cardName }
                className="card-image"
              />
              {cardTrunfo && <img
                className="card-content__image"
                src={ imgTrunfo }
                data-testid="trunfo-card"
                alt="tryunfo"
              /> }
            </div>
            <div className="describle-content">
              <p data-testid="description-card">{cardDescription}</p>
            </div>
            <div className="att-content">
              <div>
                {attr}
                <span data-testid="attr1-card">{cardAttr1}</span>
              </div>
              <div>
                {attr}
                <span data-testid="attr2-card">{cardAttr2}</span>
              </div>
              <div>
                {attr}
                <span data-testid="attr3-card">{cardAttr3}</span>
              </div>
            </div>
            <h4 data-testid="rare-card">{cardRare}</h4>
          </div>
        </div>
        { isDeleteButton && bntDelete(cardName) }
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
  isDeleteButton: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
