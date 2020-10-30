'use strict'

class ClassroomExist {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = ClassroomExist
