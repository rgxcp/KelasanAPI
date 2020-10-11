'use strict';

const Schema = use('Schema');

class UsersSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments('id');
      table
        .string('username', 20)
        .unique()
        .notNullable()
        .collate('utf8mb4_unicode_ci');
      table
        .string('profile_picture')
        .notNullable()
        .collate('utf8mb4_unicode_ci');
      table.string('password', 60).notNullable().collate('utf8mb4_unicode_ci');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UsersSchema;
