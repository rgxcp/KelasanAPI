'use strict'

class SubjectNotExist {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = SubjectNotExist
