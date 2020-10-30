'use strict'

class FolderNotExist {
  async handle({ request }, next) {
    await next()
  }
}

module.exports = FolderNotExist
