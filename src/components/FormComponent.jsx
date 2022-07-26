import React from 'react'
import { Field, reduxForm } from 'redux-form'
import countryList from './countries'
import Input from './input'
import Select from './select'
import { maxLength, name, required, tinorssn } from './validators'

let FormComponent = (props) => {
  const { handleSubmit, formValues } = props
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
      <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={[required, name, maxLength]}/>
      <Field name="tin" type="number" component={Input} label="Tin/Ssn*" validate={[required, tinorssn]}/>
      <Field 
        name="country" 
        component={Select}
        options={countryList}
        label="Country*"
        validate={required} />
      {/* {formValues && formValues.country === 'Ukraine' ? (
          <Field name="middleName" type="text" component={Input} label="Middle Name" validate={[name, maxLength]}/>
        ) : ''} */}
      <button type="submit">Submit</button>
    </form>
  )
}

FormComponent = reduxForm({
  form: 'contact',
})(FormComponent)

export default FormComponent
