import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './input'
import { maxLength, name, required, tinorssn } from './validators'

let FormComponentSecond = (props) => {
  const { handleSubmit } = props
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={[required, name, maxLength]}/>
    </form>
  )
}


FormComponentSecond = reduxForm({
  form: 'contact',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormComponentSecond)

export default FormComponentSecond