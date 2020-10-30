'use strict'

class AssignmentExist {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = AssignmentExist
