const Team = require('../models/Team');
const Product = require('../models/Product');

module.exports = {
  async index(req, res) {
    const { team_id } = req.params;

    const team = await Team.findByPk(team_id, {
      include: { association: 'products' }
    });

    return res.json(team);
  },

  async store(req, res) {
    const { team_id } = req.params;
    const { code, batch, description, state } = req.body;

    const team = await Team.findByPk(team_id);

    if (!team) {
      return res.status(400).json({ error: 'Team not found' });
    }

    const product = await Product.create({
      code,
      batch,
      description,
      state,
      team_id
    });

    return res.json(product);
  }
}