'use strict'

const Schema = use('Schema')

class TokenSchema extends Schema {
  up() {
    this.create('tokens', (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table
        .string('token', 32)
        .unique()
        .index()
        .notNullable()
        .collate('utf8mb4_unicode_ci')
      table.string('type', 9).notNullable().collate('utf8mb4_unicode_ci')
      table.boolean('is_revoked').notNullable().defaultTo(false)
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  down() {
    this.drop('tokens')
  }
}

module.exports = TokenSchema
