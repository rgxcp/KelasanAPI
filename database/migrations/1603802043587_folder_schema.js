'use strict'

const Schema = use('Schema')

class FolderSchema extends Schema {
  up() {
    this.create('folders', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('folders')
  }
}

module.exports = FolderSchema
