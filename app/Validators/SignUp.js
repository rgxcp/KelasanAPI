'use strict'

class SignUp {
  get rules() {
    return {
      name: 'required|string|max:20',
      email: 'required|email|max:50|unique:users,email',
      password: 'required|string|min:8|different:email'
    }
  }

  get messages() {
    return {
      different: 'Kata sandi harus berbeda dengan email.',
      email: 'Format email tidak sesuai.',
      max: 'Maksimal {{ agument.0 }} karakter.',
      min: 'Minimal {{ argument.0 }} karakter.',
      required: 'Input tersebut harus diisi.',
      string: 'Input harus berupa karakter.',
      unique: 'Email tersebut sudah digunakan.'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = SignUp
