import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

class Filtered extends Component {
  render() {
    const { nameCard, handleSearch, rareCard, trunfoCard } = this.props;
    return (
      <div>
        <h2>Filtro de busca</h2>
        <Input
          inputId="searchNameCard"
          nameInput="nameCard"
          typeInput="text"
          dataTest="name-filter"
          inputValue={ nameCard }
          onInputChange={ handleSearch }
        >
          Nome da carta
        </Input>
        <label htmlFor="select-rarity">
          <select
            data-testid="rare-filter"
            id="select-rarity"
            name="rareCard"
            value={ rareCard }
            onChange={ handleSearch }
          >
            <option value="todas">
              Todas
            </option>
            <option value="normal">
              Normal
            </option>
            <option value="raro">
              Raro
            </option>
            <option value="muito raro">
              Muito raro
            </option>
          </select>
        </label>
        <Input
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
