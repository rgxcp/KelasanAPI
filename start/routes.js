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
    .middleware('classroomMember')
  Route.get('today', 'AssignmentController.today')
    .middleware('classroomMember')
  Route.get('tomorrow', 'AssignmentController.tomorrow')
    .middleware('classroomMember')
  Route.get('next-week', 'AssignmentController.nextWeek')
    .middleware('classroomMember')
  Route.get('completed', 'AssignmentController.completed')
    .middleware('classroomMember')
  Route.get('uncompleted', 'AssignmentController.uncompleted')
    .middleware('classroomMember')
  Route.get(':id/timeline', 'AssignmentController.timeline')
    .middleware('classroomMember')
  Route.post('create', 'AssignmentController.create')
    .middleware('classroomMember')
    .validator('Assignment')
  Route.post(':id/mark-as-completed', 'AssignmentController.markAsCompleted')
    .middleware(['assignmentExist', 'assignmentUncompleted'])
  Route.put(':id/update', 'AssignmentController.update')
    .middleware('classroomMember')
    .validator('Assignment')
  Route.delete(':id/delete', 'AssignmentController.delete')
    .middleware('classroomLeader')
  Route.delete(':id/mark-as-uncompleted', 'AssignmentController.markAsUncompleted')
    .middleware(['assignmentExist', 'assignmentCompleted'])
}).prefix('api/v1/assignment')
  .middleware('auth')

// Classroom
Route.group(() => {
  Route.get(':id', 'ClassroomController.detail')
    .middleware('classroomMember')
  Route.get(':id/invitation-code', 'ClassroomController.invitationCode')
    .middleware('classroomLeader')
  Route.get(':id/member', 'ClassroomController.member')
    .middleware('classroomMember')
  Route.get(':id/folder', 'ClassroomController.folder')
    .middleware('classroomMember')
  Route.get(':id/subject', 'ClassroomController.subject')
    .middleware('classroomMember')
  Route.get(':id/assignment', 'ClassroomController.assignment')
    .middleware('classroomMember')
  Route.get(':id/completed-assignment', 'ClassroomController.completedAssignment')
    .middleware('classroomMember')
  Route.get(':id/uncompleted-assignment', 'ClassroomController.uncompletedAssignment')
    .middleware('classroomMember')
  Route.get(':id/note', 'ClassroomController.note')
    .middleware('classroomMember')
  Route.post('create', 'ClassroomController.create')
    .validator('Classroom')
  Route.post('join', 'ClassroomController.join')
    .middleware(['classroomExist', 'notClassroomMember'])
    .validator('JoinClassroom')
  Route.put(':id/rename', 'ClassroomController.rename')
    .middleware('classroomMember')
    .validator('Classroom')
  Route.delete(':id/delete', 'ClassroomController.delete')
    .middleware('classroomLeader')
}).prefix('api/v1/classroom')
  .middleware('auth')

// Folder
Route.group(() => {
  Route.get(':id', 'FolderController.detail')
    .middleware('classroomMember')
  Route.get(':id/assignment', 'FolderController.assignment')
    .middleware('classroomMember')
  Route.get(':id/completed-assignment', 'FolderController.completedAssignment')
    .middleware('classroomMember')
  Route.get(':id/uncompleted-assignment', 'FolderController.uncompletedAssignment')
    .middleware('classroomMember')
  Route.get(':id/note', 'FolderController.note')
    .middleware('classroomMember')
  Route.post('create', 'FolderController.create')
    .middleware(['classroomMember', 'folderNotExist'])
    .validator('Folder')
  Route.put(':id/rename', 'FolderController.rename')
    .middleware('classroomMember')
    .validator('Folder')
  Route.delete(':id/delete', 'FolderController.delete')
    .middleware('classroomLeader')
}).prefix('api/v1/folder')
  .middleware('auth')

// Note
Route.group(() => {
  Route.get(':id', 'NoteController.detail')
    .middleware('classroomMember')
  Route.get(':id/timeline', 'NoteController.timeline')
    .middleware('classroomMember')
  Route.post('create', 'NoteController.create')
    .middleware('classroomMember')
    .validator('Note')
  Route.put(':id/update', 'NoteController.update')
    .middleware('classroomMember')
    .validator('Note')
  Route.delete(':id/delete', 'NoteController.delete')
    .middleware('classroomLeader')
}).prefix('api/v1/note')
  .middleware('auth')

// Search
Route.group(() => {
  Route.get('all', 'SearchController.all')
  Route.get('classroom', 'SearchController.classroom')
  Route.get('class-member', 'SearchController.classroomMember')
  Route.get('folder', 'SearchController.folder')
  Route.get('subject', 'SearchController.subject')
  Route.get('assignment', 'SearchController.assignment')
  Route.get('note', 'SearchController.note')
}).prefix('api/v1/search')
  .middleware(['auth', 'classroomMember'])

// Subject
Route.group(() => {
  Route.get(':id', 'SubjectController.detail')
    .middleware('classroomMember')
  Route.get(':id/assignment', 'SubjectController.assignment')
    .middleware('classroomMember')
  Route.get(':id/completed-assignment', 'SubjectController.completedAssignment')
    .middleware('classroomMember')
  Route.get(':id/uncompleted-assignment', 'SubjectController.uncompletedAssignment')
    .middleware('classroomMember')
  Route.post('create', 'SubjectController.create')
    .middleware(['classroomMember', 'subjectNotExist'])
    .validator('Subject')
  Route.put(':id/rename', 'SubjectController.rename')
    .middleware('classroomMember')
    .validator('Subject')
  Route.delete(':id/delete', 'SubjectController.delete')
    .middleware('classroomLeader')
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
