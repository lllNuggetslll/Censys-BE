# Getting Started with Another Todo App Server

Another ToDo App Server exposes restful endpoints that:

- Add todos
- View single todo
- View all todos
- Delete todos

## To Run:

### 1. `npm install`

Installs packages

### 2. `npm start`

Opens port on: `http://localhost:4000`

## Routes:

On the initial screen you can view all your todos.

## View all todos:

Route: /
Method: GET
Payload: [{ key: ID, title: string}]

### Add a todo:

Route: /
Method: POST
Body: { title: string, description: string }
Payload: { key: ID }

### View single todo:

Route: /:key
Method: GET
Payload: { key: ID, title: string, description: string }

### To delete a todo:

Route: /:key
Method: DELETE
Payload: { key: ID }
