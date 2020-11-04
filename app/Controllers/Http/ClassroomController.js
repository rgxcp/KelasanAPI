'use strict'

const { randomBytes } = require('crypto')
const ClassMember = use('ClassMember')
const Classroom = use('Classroom')

class ClassroomController {
  async detail() {}

  async invitationCode() {}

  async member() {}

  async folder() {}

  async subject() {}

  async assignment() {}

  async completedAssignment() {}

  async uncompletedAssignment() {}

  async note() {}

  async create({ request, response, auth }) {
    const code = randomBytes(5).toString('hex')

    const data = request.post()
    data.invitation_code = `${code.substr(0, 3)}-${code.substr(3, 4)}-${code.substr(7, 3)}`

    const classroom = await Classroom.create(data)

    const userId = await auth.user.id
    await ClassMember.create({
      classroom_id: classroom.id,
      user_id: userId,
      role: 'LEADER'
    })

    return response.status(201).json({
      message: 'Created',
      result: classroom
    })
  }

  async join({ request, response }) {
    const { classroom_id, user_id } = request.post()

    await ClassMember.create({
      classroom_id: classroom_id,
      user_id: user_id
    })

    return response.status(201).json({
      message: 'Joined'
    })
  }

  async rename() {}

  async delete() {}
}

module.exports = ClassroomController
