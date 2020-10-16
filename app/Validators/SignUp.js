'use strict'

class SignUp {
  get rules() {
    return {
      email: 'required|max:50|email|unique:users,email',
      password: 'required|min:8|different:email'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignUp
