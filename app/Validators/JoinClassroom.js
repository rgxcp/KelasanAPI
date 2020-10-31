'use strict'

class JoinClassroom {
  get rules() {
    return {
      invitation_code: 'required|string|min:12|max:12'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = JoinClassroom
