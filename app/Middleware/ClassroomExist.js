'use strict'

const Classroom = use('Classroom')

class ClassroomExist {
  async handle({ request, response }, next) {
    const { invitation_code } = request.post()

    const classroom = await Classroom.findBy('invitation_code', invitation_code)

    if (!classroom) {
      return response.status(404).json({
        message: 'Not Found'
      })
    }

    request.body.classroom_id = classroom.id

    await next()
  }
}

module.exports = ClassroomExist
