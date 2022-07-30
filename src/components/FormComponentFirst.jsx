import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './input'
import Select from './select'
import { maxLength, name, required, tinorssn } from './validators'

let FormComponentFirst = (props) => {
  const { handleSubmit, country } = props
  if (props.currentStep !== 1) {
    return null;
  }
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
      <Field name="firstName" type="text" component={Input} label="First Name*" validate={[required, name, maxLength]} />
    </form>
  )
}

FormComponentFirst = reduxForm({
  form: 'contact',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormComponentFirst)

export default FormComponentFirst