const connection = require("../database/connection");
const generateUniqueToken = require("../utils/generateUniqueId");

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

    const { email, name, isAdmin } = request.body;
    const uniqueToken = generateUniqueToken();
    const role = isAdmin ? "HouseAdmin" : "HouseResident";

    await connection("residents").insert({
      uniqueToken,
      email,
      name,
      totalPoints: 0,
      role,
    });

    return response.status(201).json({ email });
  },

  async index(request, response) {
    const residents = await connection("residents").select("*");

    return response.json(residents);
  },
};
