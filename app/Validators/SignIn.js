'use strict'

class SignIn {
  get rules() {
    return {
      username: 'required',
      password: 'required'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignIn
