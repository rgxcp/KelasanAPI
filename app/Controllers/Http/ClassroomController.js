'use strict'

const Classroom = use('Classroom')
const ClassMember = use('ClassMember')

class ClassroomController {
  async create({ request, auth }) {
    const data = await request.post()
    data.leader = await auth.user.id

    const classroom = await Classroom.create(data)

    await ClassMember.create({
      classroom_id: classroom.id,
      user_id: classroom.leader
    })

    return classroom
  }
}

module.exports = ClassroomController
