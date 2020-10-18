'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Version 1
// User
Route.group(() => {
  Route.post('sign-up', 'UserController.signUp').validator('SignUp')
  Route.post('sign-in', 'UserController.signIn').validator('SignIn')
  Route.delete('sign-out', 'UserController.signOut').middleware('auth')
  Route.delete('sign-out-all', 'UserController.signOutAll').middleware('auth')
}).prefix('api/v1/user')
