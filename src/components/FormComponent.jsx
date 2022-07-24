import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './input'
import Select from './select'
import { required } from './validators'


// const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined
// const minValue18 = minValue(18)
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined
// const tooOld = value =>
//   value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
//   value && /.+@aol\.com/.test(value) ?
//   'Really? You still use AOL for your email?' : undefined

// const renderInputField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

// const renderSelectField = ({ input, select, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div style={{width:"50px", height:"50px"}}>
//       <select {...input} placeholder={label} type={type} className="pa2 input-reset ba b--black-40 w-100"/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

let FormComponent = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field 
        name="prefix" 
        component={Select}
        options={{
          Mr: 'Mr.',
          Mrs: 'Mrs.',
          Miss: 'Miss.',
          Dr: 'Dr.'
        }}
        label="Prefix*"
        validate={required} />
      <Field name="firstName" type="text" component={Input} label="First Name*" validate={required} />
      <Field name="middleName" type="text" component={Input} label="Middle Name" validate={required}/>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={required}/>
      <Field name="tin" type="number" component={Input} label="Tin/Ssn*" validate={required}/>
      <button type="submit">Submit</button>
    </form>
  )
}

FormComponent = reduxForm({
  form: 'contact',
})(FormComponent)

export default FormComponent
