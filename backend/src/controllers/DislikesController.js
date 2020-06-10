const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { id } = req.params;
        const { user } = req.headers;

        const logger = await Dev.findById(user);
        const target = await Dev.findById(id);

        if(!target) {
            return res.status(400).json({ error: 'Dev not exists'});
        }

        logger.dislikes.push(target._id);

        await logger.save();

        return res.json(logger);
    }
};