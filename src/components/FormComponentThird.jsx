import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import countryList from './countries'
import Input from './input'
import Select from './select'
import { maxLength, name, required, tinorssn } from './validators'

let FormComponentThird = (props) => {
  const { handleSubmit, country } = props
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Field name="tin" type="number" component={Input} label="Tin/Ssn*" validate={[required, tinorssn]}/>
      <Field 
        name="country" 
        component={Select}
        options={countryList}
        label="Country*"
        validate={required} />
      {country !== 'US' &&
          <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
      }
    </form>
  )
}

FormComponentThird = reduxForm({
  form: 'contact',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormComponentThird)

const selector = formValueSelector('contact')

FormComponentThird = connect(state => {
  const country = selector(state, 'country')

  return {
    country
  }
})(FormComponentThird)

export default FormComponentThird