const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const HouseController = require("./controllers/HouseController");
const ResidentController = require("./controllers/ResidentController");
const RoleController = require("./controllers/RoleController");
const TaskController = require("./controllers/TaskController");
const TransactionController = require("./controllers/TransactionController");

const routes = express.Router();

//House routes
// routes.post('/houses', HouseController.create);

//Resident routes
routes.post(
  "/residents",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string()
        .required()
        .email(),
      name: Joi.string().required(),
      isAdmin: Joi.boolean().required()
    })
  }),
  ResidentController.create
);

//Role routes
routes.post(
  "/roles",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required()
    })
  }),
  RoleController.create
);

//Task routes
// routes.post('/tasks', TaskController.create);

//Transaction routes
// routes.post('/transactions', TransactionController.create);

module.exports = routes;
