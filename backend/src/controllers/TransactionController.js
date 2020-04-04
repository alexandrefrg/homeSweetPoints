const connection = require("../database/connection");

module.exports = {
  async create(request, response) {},
  async index(request, response) {
    const transaction = await connection("transactions").select("*");

    return response.json(transaction);
  },
};
