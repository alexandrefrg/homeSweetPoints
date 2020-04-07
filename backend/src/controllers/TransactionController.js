const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const requesterUniqueToken = request.headers.authorization;

    const requester = await connection("residents")
      .where("uniqueToken", requesterUniqueToken)
      .select()
      .first();

    if (!requester) {
      return response.status(401).json({ error: "Operation not permited." });
    }

    const now = new Date(Date.now);
    const { points, task_uniqueToken } = request.body;
    const uniqueToken = generateUniqueToken();

    await connection("transactions").insert({
      uniqueToken,
      points,
      date: now,
      task_uniqueToken,
    });

    return response.status(201).json({ points });
  },
  async index(request, response) {
    const transaction = await connection("transactions").select("*");

    return response.json(transaction);
  },
};
