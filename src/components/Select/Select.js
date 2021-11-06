import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { children, sltId, dataTest, sltValue, onInputChange } = this.props;
    return (
      <label htmlFor={ sltId }>
        {children}
        <select
          data-testid={ dataTest }
          id={ sltId }
          name="cardRare"
          value={ sltValue }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  children: PropTypes.string.isRequired,
  sltId: PropTypes.string.isRequired,
  sltValue: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
