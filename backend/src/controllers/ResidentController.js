const connection = require("../database/connection");
const generateUniqueToken = require("../utils/generateUniqueId");

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

    const { email, name, isAdmin, house_uniqueToken } = request.body;
    const uniqueToken = generateUniqueToken();
    const role = isAdmin ? "HouseAdmin" : "HouseResident";

    await connection("residents").insert({
      uniqueToken,
      email,
      name,
      totalPoints: 0,
      role,
      house_uniqueToken,
    });

    return response.status(201).json({ email });
  },

  async index(request, response) {
    const residents = await connection("residents").select("*");

    return response.json(residents);
  },
};
