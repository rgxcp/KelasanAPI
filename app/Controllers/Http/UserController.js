'use strict';

const Hash = use('Hash');
const Token = use('App/Models/Token');
const User = use('App/Models/User');

class UserController {
  async signUp({ request, auth }) {
    const data = request.post();
    data.username = await data.username.replace(/\s+/g, '');
    data.password = await Hash.make(data.password);
    data.profile_picture = `https://ui-avatars.com/api/?name=${data.username}`;

    const user = await User.create(data);
    user.token = await auth.generate(user);

    const token = new Token();
    token.user_id = user.id;
    token.type = user.token.type;
    token.token = user.token.token;
    await token.save();

    return user;
  }
}

module.exports = UserController;
