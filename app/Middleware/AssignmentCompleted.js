'use strict'

class AssignmentCompleted {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = AssignmentCompleted
