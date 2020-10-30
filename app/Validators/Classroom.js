'use strict'

class Classroom {
  get rules() {
    return {
      name: 'required|string|max:20'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = Classroom
