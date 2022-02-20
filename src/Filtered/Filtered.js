import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Select from '../Select/Select';

import './Filtered.css';

class Filtered extends Component {
  render() {
    const { nameCard, handleSearch, rareCard, trunfoCard } = this.props;
    return (
      <div className="container-filter">
        <p>Filtro de busca</p>
        <div className="form-group label-control">
          <Input
            inputId="searchNameCard"
            nameInput="nameCard"
            typeInput="text"
            dataTest="name-filter"
            inputValue={ nameCard }
            onInputChange={ handleSearch }
            className="form-control"
          >
            Nome da carta
          </Input>
        </div>
        <div className="form-group">
          <Select
            className="form-control label-control"
            dataTest="rare-filter"
            sltId="select-rarity"
            sltName="rareCard"
            sltValue={ rareCard }
            onInputChange={ handleSearch }
            all
          >
            Raridade
          </Select>
        </div>
        <div className="form-group checked-control">
          <Input
            className="form-check-input form-check-label"
            inputId="trunfoCard"
            typeInput="checkbox"
            nameInput="trunfoCard"
            dataTest="trunfo-filter"
            inputValue={ trunfoCard }
            onInputChange={ handleSearch }
          >
            Super Trunfo
          </Input>
        </div>
      </div>
    );
  }
}

Filtered.propTypes = {
  nameCard: PropTypes.string.isRequired,
  rareCard: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  trunfoCard: PropTypes.bool.isRequired,
};

export default Filtered;
