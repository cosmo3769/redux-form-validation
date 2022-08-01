import React, { Component } from 'react'
import FormComponentFirst from './FormComponentFirst'
import FormComponentSecond from './FormComponentSecond'
import FormComponentThird from './FormComponentThird'
import PropTypes from 'prop-types'
import MultiStepProgressBar from './MultiPageProgressBar'
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
        <div>
          <MultiStepProgressBar page={this.state.page} />
          <FormComponentFirst onSubmit={this.nextPage}/>
        </div>
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