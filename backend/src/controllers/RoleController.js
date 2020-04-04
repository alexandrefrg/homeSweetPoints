const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const requesterUniqueToken = request.headers.authorization;

    const requester = await connection("residents")
      .where("uniqueToken", requesterUniqueToken)
      .select("role")
      .first();

    // if (!requester) {
    //   return response.status(412).json({ error: "This user doesn't exist." });
    // }

    if (!requester || requester.role !== "HouseAdmin") {
      return response.status(401).json({ error: "Operation not permited." });
    }

    const { title } = request.body;

    await connection("roles").insert({
      title,
    });

    return response.status(201).json({ title });
  },

  async index(request, response) {
    const roles = await connection("roles").select("*");

    return response.json(roles);
  },
};
