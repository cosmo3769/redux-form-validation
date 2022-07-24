import React from 'react';
export const Input = (props) => {
    return (
        <div className="mv4 w-100">
        <div className="b sans-serif pv2 w-100">
            {props.label}
        </div>
        <input
            {...props.input}
            placeholder={props.label}
            type="text"
            className="pa2 ba b--black-40 w-100"
        />
        {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    );
}
export default Input;