export const validateEmail = (email) => {
  const verifyEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  if (verifyEmail) {
    return true;
  }
  return false;
};

export const validatePassword = (password) => {
  if (password.length >= 6) {
    return true;
  } return false;
};

export const validateInformation = (email, password) => {
  const answer = {
    status: false,
    message: ' ',
    isEmailCorrect: false,
    isPasswordCorrect: false,
  };
  if (validateEmail(email) && validatePassword(password)) {
    answer.status = true;
    answer.message = 'It is a valid Email and Pasword';
    answer.isEmailCorrect = true;
    answer.isPasswordCorrect = true;
  } else if (validateEmail(email) === false && validatePassword(password)) {
    answer.status = false;
    answer.message = 'Example: name@hotmail.com';
    answer.isEmailCorrect = false;
    answer.isPasswordCorrect = true;
  } else if (validateEmail(email) && validatePassword(password) === false) {
    answer.status = false;
    answer.message = 'Password should be at least 6 characters long';
    answer.isEmailCorrect = true;
    answer.isPasswordCorrect = false;
  } else if (validateEmail(email) === false && validatePassword(password) === false) {
    answer.status = false;
    answer.message = 'Invalid Email and Password';
    answer.isEmailCorrect = false;
    answer.isPasswordCorrect = false;
  }

  return answer;
};

export const errorHandler = (errorCode) => {
  let error;
  if (errorCode === 'auth/email-already-in-use') {
    error = 'There is already an account with this email';
  }
  return error;
};
