'use strict'

class AssignmentUncompleted {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = AssignmentUncompleted
