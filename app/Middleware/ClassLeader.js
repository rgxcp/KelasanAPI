'use strict'

class ClassLeader {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = ClassLeader
