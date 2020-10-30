'use strict'

class SignIn {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|string'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignIn
