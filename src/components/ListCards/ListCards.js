import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import Filtered from '../Filtered/Filtered';
// import Button from '../Button/Button';
import Card from '../Card/Card';

class ListCards extends Component {
  render() {
    const {
      nameCard,
      rareCard,
      handleSearch,
      trunfoCard,
      resultGetFilter,
      onSaveButtonClick,
      // cardName,
      handleDelete,
      isDeleteButton,
    } = this.props;

    // const bntDelete = (cardTitle) => (
    //   <Button
    //     dataTestBtn="delete-button"
    //     typeBtn="button"
    //     isDisabled={ false }
    //     onClick={ () => handleDelete(cardTitle) }
    //   >
    //     Excluir
    //   </Button>
    // );

    return (
      <section className="list-card">
        <div className="list-card__content-filter">
          <h2>Todas as cartas</h2>
          <Filtered
            nameCard={ nameCard }
            rareCard={ rareCard }
            trunfoCard={ trunfoCard }
            handleSearch={ handleSearch }
          />
        </div>
        <div className="list-card__container-card">
          {onSaveButtonClick && resultGetFilter
            .map((card) => (
              // <div key={ card.cardDescription } className="content-card-button">
              <Card
                key={ card.cardDescription }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                isDeleteButton={ isDeleteButton }
                handleDelete={ handleDelete }
              />

              // </div>
            ))}
        </div>
      </section>
    );
  }
}

ListCards.propTypes = {
  nameCard: PropTypes.string.isRequired,
  rareCard: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  isDeleteButton: PropTypes.bool.isRequired,
  trunfoCard: PropTypes.bool.isRequired,
  // cardName: PropTypes.string,
  resultGetFilter: PropTypes.arrayOf(shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

// ListCards.defaultProps = {
//   cardName: '',
// };
export default ListCards;
