'use strict'

class ClassroomLeader {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = ClassroomLeader
