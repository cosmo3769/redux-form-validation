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
      <div className="mv3 w-100">
        <div className="b sans-serif pv2 w-100">{props.label}</div>
        <select {...props.input} className="pa2 input-reset ba b--black-40 w-100">
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