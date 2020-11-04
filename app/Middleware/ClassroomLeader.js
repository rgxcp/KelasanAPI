'use strict'

const ClassMember = use('ClassMember')

class ClassroomLeader {
  async handle({ params: { id }, response, auth }, next) {
    const userId = await auth.user.id

    const classLeader = await ClassMember.query()
      .where('classroom_id', id)
      .where('user_id', userId)
      .where('role', 'LEADER')
      .first()

    if (!classLeader) {
      return response.status(401).json({
        message: 'Unauthorized'
      })
    }

    await next()
  }
}

module.exports = ClassroomLeader
