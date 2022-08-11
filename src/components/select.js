import React from 'react';

export const Select = props => {
  const renderSelectOptions = (key, index) => {
    return (
      <option
        key={`${index}-${key}`}
        value={key}
      >
        {props.options[key]}
      </option>
    );
  }

  if (props && props.options) {
    return (
      <div className="select-wrapper">
        <div className="select-label">{props.label}</div>
        <select {...props.input} className="form-select">
          <option value="">{props.label}</option>
          {Object.keys(props.options).map(renderSelectOptions)}
        </select>
        {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}
      </div>
    )
  }
  return <div></div>
}

export default Select;