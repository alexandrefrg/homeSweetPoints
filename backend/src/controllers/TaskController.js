const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const tasks = await connection('tasks').select('*');

    return response.json(tasks);
  },

  async create(request, response) {
    const { title, description, points } = request.body;

    const [id] = await connection('tasks').insert({
      title,
      description,
      points
    });

    return response.json({ id });
  },
};
