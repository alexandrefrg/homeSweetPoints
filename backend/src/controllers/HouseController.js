const connection = require("../database/connection");

module.exports = {
  async create(request, response) {},
  async index(request, response) {
    const houses = await connection("houses").select("*");

    return response.json(houses);
  },
};
