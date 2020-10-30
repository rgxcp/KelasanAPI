'use strict'

class SignUp {
  get rules() {
    return {
      name: 'required|string|max:20',
      email: 'required|email|max:50|unique:users,email',
      password: 'required|string|min:8|different:email'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignUp
