const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');
const TransactionController = require('./controllers/TransactionController');

const routes = express.Router();

//User routes
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
// routes.delete('/users/:id', UserController.delete);

//Task routes
routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.create);
// routes.delete('/tasks/:id', TaskController.delete);

//Transaction routes
routes.get('/transactions', TransactionController.index);
routes.post('/transactions', TransactionController.create);
routes.delete('/transactions/:id', TransactionController.delete);


module.exports = routes;
