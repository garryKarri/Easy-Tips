const router = require('express').Router();

const { Tips } = require('../../db/models');
// /tips/:id
router.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Tips.findAll({ where: { workerId: req.params.id } });
      return res.json(result);
    } catch (error) {
      res.sendStatus(418);
    }
  });
module.exports = router;
