'use strict'

class SignIn {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|string'
    }
  }

  get messages() {
    return {
      email: 'Format email tidak sesuai.',
      required: 'Input tersebut harus diisi.',
      string: 'Input harus berupa karakter.'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignIn
