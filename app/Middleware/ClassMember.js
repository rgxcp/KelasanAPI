'use strict'

class ClassMember {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = ClassMember
