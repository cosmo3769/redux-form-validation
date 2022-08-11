import React from 'react';
import './styles.css'
export const Input = (props) => {
    return (
        <div className="input-wrapper">
        <div className="form-label">
            {props.label}
        </div>
        <input
            {...props.input}
            placeholder={props.label}
            type="text"
            className="form-input"
        />
        {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    );
}
export default Input;