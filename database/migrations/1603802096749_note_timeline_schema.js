'use strict'

const Schema = use('Schema')

class NoteTimelineSchema extends Schema {
  up() {
    this.create('note_timelines', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down() {
    this.drop('note_timelines')
  }
}

module.exports = NoteTimelineSchema
