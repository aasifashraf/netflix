export const formValidation = (email, password, name) => {
  const validateName = /^[a-zA-Z\s]+$/gm.test(name);
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateName) {
    return "Please enter a valid name";
  }
  if (!validateEmail) {
    return "Please enter a valid email address";
  }
  if (!validatePassword) {
    return "Please enter a valid password";
  }

  return "";
};
