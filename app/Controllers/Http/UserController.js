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

  async signIn({ request, response, auth }) {
    const { email, password } = request.post()

    const token = await auth.attempt(email, password)

    return response.status(201).json({
      message: 'Authenticated',
      result: token
    })
  }

  async signOut({ response, auth }) {
    const token = auth.getAuthHeader()

    await auth.revokeTokens(token)

    return response.status(200).json({
      message: 'Success'
    })
  }

  async signOutAll({ response, auth }) {
    await auth.revokeTokens()

    return response.status(200).json({
      message: 'Success'
    })
  }

  async update({ request, response, auth }) {
    const data = request.post()

    const id = await auth.user.id
    await User.query().where('id', id).update(data)

    return response.status(200).json({
      message: 'Success'
    })
  }
}

module.exports = UserController
