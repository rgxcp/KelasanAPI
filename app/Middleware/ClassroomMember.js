'use strict'

const ClassMember = use('ClassMember')

class ClassroomMember {
  async handle({ params: { id }, response, auth }, next) {
    const userId = await auth.user.id

    const classMember = await ClassMember.query()
      .where('classroom_id', id)
      .where('user_id', userId)
      .first()

    if (!classMember) {
      return response.status(401).json({
        message: 'Unauthorized'
      })
    }

    await next()
  }
}

module.exports = ClassroomMember
