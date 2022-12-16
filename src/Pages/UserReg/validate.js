export const Validate = (values) => {
  let errors = {};
  let pattern = /\S+@\S+\.\S+/;


  if (!values.email) {
    errors.email = "Email Field is Required";
  } else if (!pattern.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is Required";
  } else if (values.phoneNumber.length !== 11) {
    errors.phoneNumber = "invalid number.";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters.";
  }
  

  return errors;
};
