'use strict'

class JoinClassroom {
  get rules() {
    return {
      invitation_code: 'required|string|min:12|max:12'
    }
  }

  get messages() {
    return {
      max: 'Maksimal {{ argument.0 }} karakter.',
      min: 'Minimal {{ argument.0 }} karakter.',
      required: 'Input tersebut harus diisi.',
      string: 'Input harus berupa karakter.'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = JoinClassroom
