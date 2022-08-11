import React, { Component } from 'react'
import FormComponentFirst from './FormComponentFirst'
import FormComponentSecond from './FormComponentSecond'
import FormComponentThird from './FormComponentThird'
import PropTypes from 'prop-types'
import MultiStepProgressBar from './MultiPageProgressBar'
import {Container, Row, Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && 
          <Container className='bg-color mt-4 mb-4'>
            <Row><h6 className='mt-4'>Personal Information</h6></Row>
            <Row className='m-4'><MultiStepProgressBar page={this.state.page} /></Row>
            <Row><FormComponentFirst onSubmit={this.nextPage}/></Row>
          </Container>
        }
        {page === 2 && 
        <div>
          <MultiStepProgressBar page={this.state.page} />
          <FormComponentSecond previousPage={this.previousPage} onSubmit={this.nextPage}/>
        </div>}
        {page === 3 && 
        <div>
          <MultiStepProgressBar page={this.state.page} />
          <FormComponentThird previousPage={this.previousPage} onSubmit={onSubmit}/>
        </div>}
      </div>
    )
  }
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormComponent