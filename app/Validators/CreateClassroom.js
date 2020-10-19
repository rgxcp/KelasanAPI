'use strict'

class CreateClassroom {
  get rules() {
    return {
      name: 'required|max:20|unique:classrooms,name',
      password: 'required|min:8|different:name'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = CreateClassroom
