# 🏫 Kelasan API Adonis
API for managing class homeworks and notes.

## Status
ABANDONED

## Requirements
1. Node.js
2. NPM
3. Adonis.js CLI
3. XAMPP
4. Postman

## How to Use
1. Clone this repository to your desired location.
2. Create database `kelasan_sandbox` and configure it on `.env` file.
3. Run migration `adonis migration:run`.
4. Run server `adonis serve --dev`.
5. Fire-up Postman.
6. Do-what-you-want-with-it!

## Endpoints
### GET
| URL | Description | Param | Return Type |
|---|---|---|---|
| `/api/v1/assignment/:id` | | | |
| `/api/v1/assignment/today` | | | |
| `/api/v1/assignment/tomorrow` | | | |
| `/api/v1/assignment/next-week` | | | |
| `/api/v1/assignment/completed` | | | |
| `/api/v1/assignment/uncompleted` | | | |
| `/api/v1/assignment/:id/timeline` | | | |
| `/api/v1/classroom/:id` | | | |
| `/api/v1/classroom/:id/invitation-code` | | | |
| `/api/v1/classroom/:id/member` | | | |
| `/api/v1/classroom/:id/folder` | | | |
| `/api/v1/classroom/:id/subject` | | | |
| `/api/v1/classroom/:id/assignment` | | | |
| `/api/v1/classroom/:id/completed-assignment` | | | |
| `/api/v1/classroom/:id/uncompleted-assignment` | | | |
| `/api/v1/classroom/:id/note` | | | |
| `/api/v1/folder/:id` | | | |
| `/api/v1/folder/:id/assignment` | | | |
| `/api/v1/folder/:id/completed-assignment` | | | |
| `/api/v1/folder/:id/uncompleted-assignment` | | | |
| `/api/v1/folder/:id/note` | | | |
| `/api/v1/note/:id` | | | |
| `/api/v1/note/:id/timeline` | | | |
| `/api/v1/search/all` | | | |
| `/api/v1/search/classroom` | | | |
| `/api/v1/search/class-member` | | | |
| `/api/v1/search/folder` | | | |
| `/api/v1/search/subject` | | | |
| `/api/v1/search/assignment` | | | |
| `/api/v1/search/note` | | | |
| `/api/v1/subject/:id` | | | |
| `/api/v1/subject/:id/assignment` | | | |
| `/api/v1/subject/:id/completed-assignment` | | | |
| `/api/v1/subject/:id/uncompleted-assignment` | | | |
| `/api/v1/user/self/profile` | | | |
| `/api/v1/user/self/classroom` | | | |
| `/api/v1/user/self/subject` | | | |
| `/api/v1/user/self/assignment` | | | |
| `/api/v1/user/self/completed-assignment` | | | |
| `/api/v1/user/self/uncompleted-assignment` | | | |

### POST
| URL | Description | Param | Return Type |
|---|---|---|---|
| `/api/v1/assignment/create` | | | |
| `/api/v1/assignment/:id/mark-as-completed` | | | |
| `/api/v1/classroom/create` | | | |
| `/api/v1/classroom/join` | | | |
| `/api/v1/folder/create` | | | |
| `/api/v1/note/create` | | | |
| `/api/v1/subject/create` | | | |
| `/api/v1/user/sign-up` | | | |
| `/api/v1/user/sign-in` | | | |

### PUT
| URL | Description | Param | Return Type |
|---|---|---|---|
| `/api/v1/assignment/:id/update` | | | |
| `/api/v1/classroom/:id/rename` | | | |
| `/api/v1/folder/:id/rename` | | | |
| `/api/v1/note/:id/update` | | | |
| `/api/v1/subject/:id/rename` | | | |
| `/api/v1/user/self/update` | | | |

### DELETE
| URL | Description | Param | Return Type |
|---|---|---|---|
| `/api/v1/assignment/:id/delete` | | | |
| `/api/v1/assignment/:id/mark-as-uncompleted` | | | |
| `/api/v1/classroom/:id/delete` | | | |
| `/api/v1/folder/:id/delete` | | | |
| `/api/v1/note/:id/delete` | | | |
| `/api/v1/subject/:id/delete` | | | |
| `/api/v1/user/sign-out` | | | |
| `/api/v1/user/sign-out-all` | | | |
