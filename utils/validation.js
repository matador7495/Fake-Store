const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  return regex.test(username);
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  return regex.test(password);
};

const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Please enter a valid username");
  } else if (!passwordResult) {
    alert("Please enter a valid password");
  }
};

export default validateForm;
