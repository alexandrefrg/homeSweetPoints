const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const transactions = await connection('transactions').select('*');

    return response.json(transactions);
  },

  async create(request, response) {
    const { points, task_id } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('transactions').insert({
      points,
      user_id,
      task_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const transactions = await connection('transactions')
      .where('id', id)
      .select('user_id')
      .first();

    if(!!transactions && transactions.user_id == user_id) {
      await connection('transactions').where('id', id).delete();

      return response.status(204).send();
    }

    return response.status(401).json({ error: 'Operation not permitted' })
  },
};
