'use strict';

class SignUp {
  get rules() {
    return {
      username: 'required|min:5|max:20',
      password: 'required|min:8|different:username'
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = SignUp;
