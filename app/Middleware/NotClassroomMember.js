'use strict'

class NotClassroomMember {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = NotClassroomMember
