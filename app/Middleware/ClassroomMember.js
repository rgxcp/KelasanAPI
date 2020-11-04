'use strict'

class ClassroomMember {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = ClassroomMember
