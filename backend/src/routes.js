const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

// const HouseController = require("./controllers/HouseController");
const ResidentController = require("./controllers/ResidentController");
const RoleController = require("./controllers/RoleController");
const TaskController = require("./controllers/TaskController");
const TransactionController = require("./controllers/TransactionController");

const routes = express.Router();

//House routes
routes.post(
  "/houses",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      familyName: Joi.string().required(),
    }),
  }),
  HouseController.create
);
routes.get("/houses", HouseController.index);

//Resident routes
routes.post(
  "/residents",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      totalPoints: Joi.number(),
      house_uniqueToken: Joi.string().required(),
    }),
  }),
  ResidentController.create
);
routes.get("/residents", ResidentController.index);

//Role routes
routes.post(
  "/roles",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
    }),
  }),
  RoleController.create
);
routes.get("/roles", RoleController.index);

//Task routes
routes.post(
  "/tasks",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      points: Joi.number().required().min(1).max(100),
      house_uniqueToken: Joi.string().required(),
    }),
  }),
  TaskController.create
);
routes.get("/tasks", TaskController.index);

//Transaction routes
routes.post(
  "/transactions",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      points: Joi.number().required().min(1).max(100),
      date: Joi.date(),
      house_uniqueToken: Joi.string().required(),
      task_uniqueToken: Joi.string().required(),
    }),
  }),
  TransactionController.create
);
routes.get("/transactions", TransactionController.index);

module.exports = routes;
