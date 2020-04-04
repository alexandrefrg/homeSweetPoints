const connection = require("../database/connection");

module.exports = {
  async create(request, response) {},

  async index(request, response) {
    const tasks = await connection("tasks").select("*");

    return response.json(tasks);
  },
};
