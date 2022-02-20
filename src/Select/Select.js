import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      children,
      sltId,
      dataTest,
      sltValue,
      onInputChange,
      sltName,
      className,
      all } = this.props;
    return (
      <label htmlFor={ sltId }>
        {children}
        <select
          data-testid={ dataTest }
          id={ sltId }
          name={ sltName }
          value={ sltValue }
          onChange={ onInputChange }
          className={ className }
        >
          {all && <option value="todas">Todas</option> }
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  children: PropTypes.string,
  sltId: PropTypes.string.isRequired,
  sltValue: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  sltName: PropTypes.string.isRequired,
  all: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  children: '',
  className: '',
};

export default Select;
