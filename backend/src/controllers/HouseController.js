const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    // const requesterUniqueToken = request.headers.authorization;
    // const requester = await connection("residents")
    //   .where("uniqueToken", requesterUniqueToken)
    //   .select("role")
    //   .first();
    // if (!requester || requester.role !== "HouseAdmin") {
    //   return response.status(401).json({ error: "Operation not permited." });
    // }
    // const { title } = request.body;
    // await connection("roles").insert({
    //   title,
    // });
    // return response.status(201).json({ title });
  },
  async index(request, response) {
    // const houses = await connection("houses").select("*");
    // return response.json(houses);
  },
};
