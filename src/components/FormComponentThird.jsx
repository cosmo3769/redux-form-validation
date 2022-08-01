import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import countryList from './countries'
import Input from './input'
import Select from './select'
import { maxLength, name, required, tinorssn } from './validators'

let FormComponentThird = (props) => {
  const { handleSubmit, previousPage, country } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* <Field 
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
      <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={[required, name, maxLength]}/> */}
      <Field name="tin" type="number" component={Input} label="Tin/Ssn*" validate={[required, tinorssn]}/>
      <Field 
        name="country" 
        component={Select}
        options={countryList}
        label="Country*"
        validate={required} />
      {country && country !== 'US' &&
          <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
      }
      <button type="button" className="previous" onClick={previousPage}>Previous</button>
      <button type="submit">Submit</button>
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
