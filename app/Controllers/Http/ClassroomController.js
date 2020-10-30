'use strict'

const { randomBytes } = require('crypto')
const ClassMember = use('ClassMember')
const Classroom = use('Classroom')

class ClassroomController {
  async create({ request, auth }) {
    const code = randomBytes(5).toString('hex')

    const data = await request.post()
    data.invitation_code = `${code.substr(0, 3)}-${code.substr(3, 4)}-${code.substr(7, 3)}`

    const classroom = await Classroom.create(data)
    classroom.role = 'LEADER'

    await ClassMember.create({
      classroom_id: classroom.id,
      user_id: auth.user.id,
      role: classroom.role
    })
    return classroom
  }
}

module.exports = ClassroomController
