'use strict';

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

const Route = use('Route');

// Version 1
Route.group(() => {
  // User
  Route.post('signup', 'UserController.signUp').validator('SignUp');
  Route.post('signin', 'UserController.signIn').validator('SignIn');
}).prefix('api/v1');
