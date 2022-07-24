export const required = (value) => {
    if (!value) {
      return 'This field is required!'
    }
  };


export const name = value => {
    if (value && !/^[a-z ,.'-]+$/i.test(value)) {
        return 'Invalid name'
    }
};