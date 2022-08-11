import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import countryList from './countries'
import Input from './input'
import Select from './select'
import { maxLength, name, required, tinorssn } from './validators'
import { Container, Row, Col } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

let FormComponentFirst = (props) => {
  const { handleSubmit, country } = props
  return (
    <Container className='mb-4'>
    <Row>
      <Col className="col-10"><h5>Personal Information</h5></Col>
      <Col><a href='/help'><button type='button' className='help'>Help</button></a></Col>
    </Row>
    <form onSubmit={handleSubmit}>
      <Row className='bg-white m-4 border'>
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
      </Row>
      <Row className='bg-white m-4 border'>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={[required, name, maxLength]}/>
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
      </Row>
      <Row className='bg-white m-4 border'>
      <Field name="lastName" type="text" component={Input} label="LastName*" validate={[required, name, maxLength]}/>
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
      </Row>
      <Row>
      <Col className='col-10'><h5>happy hadadiadada</h5></Col>  
      <Col><button type="submit" className="next">Next</button></Col>
      </Row>
    </form>
    </Container>
  )
}


FormComponentFirst = reduxForm({
  form: 'contact',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormComponentFirst)

const selector = formValueSelector('contact')

FormComponentFirst = connect(state => {
  const country = selector(state, 'country')
  

  return {
    country
  }
})(FormComponentFirst)

export default FormComponentFirst
