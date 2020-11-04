'use strict'

const ClassMember = use('ClassMember')

class NotClassroomMember {
  async handle({ request, response, auth }, next) {
    const { classroom_id } = request.post()

    const userId = await auth.user.id

    const classMember = await ClassMember.query()
      .where('classroom_id', classroom_id)
      .where('user_id', userId)
      .first()

    if (classMember) {
      return response.status(403).json({
        message: 'Already Joined'
      })
    }

    request.body.user_id = userId

    await next()
  }
}

module.exports = NotClassroomMember
