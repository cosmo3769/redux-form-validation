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
      currentStep: 1
    }
  }
  
  nextPage() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  previousPage() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button className='previous' onClick={this.previousPage}>
          Previous
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button color="primary float-right" onClick={this.nextPage}>
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <button>Submit</button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        <MultiStepProgressBar currentStep={this.state.currentStep} />
        <FormComponentFirst currentStep={this.state.currentStep} />
        <FormComponentSecond currentStep={this.state.currentStep} />
        <FormComponentThird currentStep={this.state.currentStep} />
        {this.previousButton}
        {this.nextButton}
        {this.submitButton}
      </div>
    )
  }
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default FormComponent