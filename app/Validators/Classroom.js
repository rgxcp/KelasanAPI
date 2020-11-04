'use strict'

class Classroom {
  get rules() {
    return {
      name: 'required|string|max:20'
    }
  }

  get messages() {
    return {
      max: 'Maksimal {{ argument.0 }} karakter.',
      required: 'Input tersebut harus diisi.',
      string: 'Input harus berupa karakter.'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Classroom
