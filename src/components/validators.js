export const required = (value) => {
    if (!value) {
      return 'This field is required!'
    }
  };


export const name = value => {
    if (value && !/^[a-z ,.'-]+$/i.test(value)) {
        return 'Invalid name!'
    }
};

export const maxLength = value => {
  if (value && value.length>20) {
    return 'Must be 20 characters or less!'
  }
}

export const tinorssn = value => {
  if (value && /^(?:\d{3}-\d{2}-\d{4})$/.test(value)) {
      return 'Invalid tin/ssn!'
  }
  if (value && (value.length>9 || value.length<9)) {
    return 'Must be 9 digits!'
  }
}