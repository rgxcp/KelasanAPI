'use strict'

class NotClassMember {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = NotClassMember
