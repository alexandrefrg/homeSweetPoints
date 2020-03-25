const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');

    return response.json(users);
  },
  
  async create(request, response) {
    const { name, email, whatsapp, role } = request.body;

    const [id] = await connection('users').insert({
      name,
      email,
      whatsapp,
      role
    });

    return response.json({ id });
  },
};
