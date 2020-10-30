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
// Assignment
Route.group(() => {
  Route.get(':id', 'AssignmentController.detail')
    .middleware('classMember')
  Route.get('today', 'AssignmentController.today')
    .middleware('classMember')
  Route.get('tomorrow', 'AssignmentController.tomorrow')
    .middleware('classMember')
  Route.get('next-week', 'AssignmentController.nextWeek')
    .middleware('classMember')
  Route.get('completed', 'AssignmentController.completed')
    .middleware('classMember')
  Route.get('uncompleted', 'AssignmentController.uncompleted')
    .middleware('classMember')
  Route.get(':id/timeline', 'AssignmentController.timeline')
    .middleware('classMember')
  Route.post('create', 'AssignmentController.create')
    .middleware('classMember')
    .validator('Assignment')
  Route.post(':id/mark-as-completed', 'AssignmentController.markAsCompleted')
    .middleware(['assignmentExist', 'assignmentUncompleted'])
  Route.put(':id/update', 'AssignmentController.update')
    .middleware('classMember')
    .validator('Assignment')
  Route.delete(':id/delete', 'AssignmentController.delete')
    .middleware('classLeader')
  Route.delete(':id/mark-as-uncompleted', 'AssignmentController.markAsUncompleted')
    .middleware(['assignmentExist', 'assignmentCompleted'])
}).prefix('api/v1/assignment')
  .middleware('auth')

// Classroom
Route.group(() => {
  Route.get(':id', 'ClassroomController.detail')
    .middleware('classMember')
  Route.get(':id/invitation-code', 'ClassroomController.invitationCode')
    .middleware('classLeader')
  Route.get(':id/member', 'ClassroomController.member')
    .middleware('classMember')
  Route.get(':id/folder', 'ClassroomController.folder')
    .middleware('classMember')
  Route.get(':id/subject', 'ClassroomController.subject')
    .middleware('classMember')
  Route.get(':id/assignment', 'ClassroomController.assignment')
    .middleware('classMember')
  Route.get(':id/completed-assignment', 'ClassroomController.completedAssignment')
    .middleware('classMember')
  Route.get(':id/uncompleted-assignment', 'ClassroomController.uncompletedAssignment')
    .middleware('classMember')
  Route.get(':id/note', 'ClassroomController.note')
    .middleware('classMember')
  Route.post('create', 'ClassroomController.create')
    .validator('Classroom')
  Route.post('join', 'ClassroomController.join')
    .middleware(['classroomExist', 'notClassroomMember'])
    .validator('JoinClassroom')
  Route.put(':id/rename', 'ClassroomController.rename')
    .middleware('classMember')
    .validator('Classroom')
  Route.delete(':id/delete', 'ClassroomController.delete')
    .middleware('classLeader')
}).prefix('api/v1/classroom')
  .middleware('auth')

// Folder
Route.group(() => {
  Route.get(':id', 'FolderController.detail')
    .middleware('classMember')
  Route.get(':id/assignment', 'FolderController.assignment')
    .middleware('classMember')
  Route.get(':id/completed-assignment', 'FolderController.completedAssignment')
    .middleware('classMember')
  Route.get(':id/uncompleted-assignment', 'FolderController.uncompletedAssignment')
    .middleware('classMember')
  Route.get(':id/note', 'FolderController.note')
    .middleware('classMember')
  Route.post('create', 'FolderController.create')
    .middleware(['classMember', 'folderNotExist'])
    .validator('Folder')
  Route.put(':id/rename', 'FolderController.rename')
    .middleware('classMember')
    .validator('Folder')
  Route.delete(':id/delete', 'FolderController.delete')
    .middleware('classLeader')
}).prefix('api/v1/folder')
  .middleware('auth')

// Note
Route.group(() => {
  Route.get(':id', 'NoteController.detail')
    .middleware('classMember')
  Route.get(':id/timeline', 'NoteController.timeline')
    .middleware('classMember')
  Route.post('create', 'NoteController.create')
    .middleware('classMember')
    .validator('Note')
  Route.put(':id/update', 'NoteController.update')
    .middleware('classMember')
    .validator('Note')
  Route.delete(':id/delete', 'NoteController.delete')
    .middleware('classLeader')
}).prefix('api/v1/note')
  .middleware('auth')

// Search
Route.group(() => {
  Route.get('all', 'SearchController.all')
  Route.get('classroom', 'SearchController.classroom')
  Route.get('class-member', 'SearchController.classMember')
  Route.get('folder', 'SearchController.folder')
  Route.get('subject', 'SearchController.subject')
  Route.get('assignment', 'SearchController.assignment')
  Route.get('note', 'SearchController.note')
}).prefix('api/v1/search')
  .middleware(['auth', 'classMember'])

// Subject
Route.group(() => {
  Route.get(':id', 'SubjectController.detail')
    .middleware('classMember')
  Route.get(':id/assignment', 'SubjectController.assignment')
    .middleware('classMember')
  Route.get(':id/completed-assignment', 'SubjectController.completedAssignment')
    .middleware('classMember')
  Route.get(':id/uncompleted-assignment', 'SubjectController.uncompletedAssignment')
    .middleware('classMember')
  Route.post('create', 'SubjectController.create')
    .middleware(['classMember', 'subjectNotExist'])
    .validator('Subject')
  Route.put(':id/rename', 'SubjectController.rename')
    .middleware('classMember')
    .validator('Subject')
  Route.delete(':id/delete', 'SubjectController.delete')
    .middleware('classLeader')
}).prefix('api/v1/subject')
  .middleware('auth')

// User
Route.group(() => {
  Route.post('sign-up', 'UserController.signUp')
    .validator('SignUp')
  Route.post('sign-in', 'UserController.signIn')
    .validator('SignIn')
  Route.delete('sign-out', 'UserController.signOut')
    .middleware('auth')
  Route.delete('sign-out-all', 'UserController.signOutAll')
    .middleware('auth')
}).prefix('api/v1/user')

// User Self
Route.group(() => {
  Route.get('profile', 'UserController.profile')
  Route.get('classroom', 'UserController.classroom')
  Route.get('subject', 'UserController.subject')
  Route.get('assignment', 'UserController.assignment')
  Route.get('completed-assignment', 'UserController.completedAssignment')
  Route.get('uncompleted-assignment', 'UserController.uncompletedAssignment')
  Route.put('update', 'UserController.update')
    .validator('SignUp')
}).prefix('api/v1/user/self')
  .middleware('auth')
