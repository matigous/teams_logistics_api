const Team = require('../models/Team');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'teams'/* , through: { attributes: [] }  */}
    });

    return res.json(user.teams);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [ team ] = await Team.findOrCreate({
      where: { name }
    });

    await user.addTeam(team);

    return res.json(team);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const team  = await Team.findOne({
      where: { name }
    });

    await user.removeTeam(team);

    return res.json();

  }
}