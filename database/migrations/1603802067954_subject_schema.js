'use strict'

const Schema = use('Schema')

class SubjectSchema extends Schema {
  up() {
    this.create('subjects', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('subjects')
  }
}

module.exports = SubjectSchema
