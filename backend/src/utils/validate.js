export const validate = {
  username(username) {
    const re = /[^a-zA-Z0-9]/;
    return re.test(String(username));
  },

  registration(username, password) {
    if (username && password) {
      if (password.length < 8) {
        throw {
          statusCode: 400,
          message: 'The password must be at least 8 characters long.',
        };
      }
      if (username.length < 3) {
        throw {
          statusCode: 400,
          message: 'The username must be at least 3 characters long.',
        };
      }
      if (this.username(username)) {
        throw { statusCode: 400, message: 'Invalid username.' };
      }
    } else {
      throw {
        statusCode: 400,
        message: 'Please fill out all required fields.',
      };
    }
  },

  valideNumber(number) {
    if (isNaN(number)) {
      throw { statusCode: 400, message: `Parameter must be a number and your parameter is ${typeof number}` };
    }
    if (number % 1 !== 0) {
      throw { statusCode: 400, message: `Please use positive whole numbers.` };
    }
  },
};
