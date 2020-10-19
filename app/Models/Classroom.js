'use strict'

const Hash = use('Hash')
const Model = use('Model')

class Classroom extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (classroomInstance) => {
      if (classroomInstance.dirty.password) {
        classroomInstance.password = await Hash.make(classroomInstance.password)
      }
    })
  }

  static get hidden() {
    return ['password']
  }
}

module.exports = Classroom
