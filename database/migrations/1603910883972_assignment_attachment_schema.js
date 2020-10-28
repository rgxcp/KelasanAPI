'use strict'

const Schema = use('Schema')

class AssignmentAttachmentSchema extends Schema {
  up() {
    this.create('assignment_attachments', (table) => {
      table.increments('id')
      table
        .integer('assignment_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('assignments')
      table.string('direct_link').notNullable().collate('utf8mb4_unicode_ci')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('assignment_attachments')
  }
}

module.exports = AssignmentAttachmentSchema
