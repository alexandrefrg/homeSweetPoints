const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const requesterUniqueToken = request.headers.authorization;

    const requester = await connection("residents")
      .where("uniqueToken", requesterUniqueToken)
      .select("role")
      .first();

    if (!requester || requester.role !== "HouseAdmin") {
      return response.status(401).json({ error: "Operation not permited." });
    }

    const { name, description, points } = request.body;
    const uniqueToken = generateUniqueToken();

    await connection("roles").insert({
      uniqueToken,
      name,
      description,
      points,
    });

    return response.status(201).json({ name });
  },

  async index(request, response) {
    const tasks = await connection("tasks").select("*");

    return response.json(tasks);
  },
};
