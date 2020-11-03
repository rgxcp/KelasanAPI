'use strict'

const User = use('User')

class UserController {
  async profile() {}

  async classroom() {}

  async subject() {}

  async assignment() {}

  async completedAssignment() {}

  async uncompletedAssignment() {}

  async signUp({ request, response, auth }) {
    const data = request.post()
    data.profile_picture = `https://ui-avatars.com/api/?name=${data.name}`

    const user = await User.create(data)
    user.token = await auth.generate(user)

    return response.status(201).json({
      message: 'Created',
      result: user
    })
  }

  async signIn({ request, auth }) {
    const { email, password } = await request.post()

    return await auth.attempt(email, password)
  }

  async signOut({ auth }) {
    const token = await auth.getAuthHeader()

    return await auth.revokeTokens(token)
  }

  async signOutAll({ auth }) {
    return await auth.revokeTokens()
  }

  async update({ request, auth }) {
    const data = await request.post()

    return await User.query()
      .where('id', await auth.user.id)
      .update(data)
  }
}

module.exports = UserController
