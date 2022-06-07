const router = require('express').Router();

const { FeedBack, Tips } = require('../../db/models');
//   /review/:id
router.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await FeedBack.findAll({ where: { workerId: req.params.id } });
      res.json(result);
    } catch (error) {
      res.sendStatus(418);
    }
  })
  .post(async (req, res) => {
    const {
      text, stars, data, tipSize,
    } = req.body;
    console.log(req.body, '-----------------------------------');
    if (tipSize <= 0 || tipSize === '') {
      return res.sendStatus(401);
    }

    if (tipSize) {
      const newTips = await Tips.create(
        {
          tipSize, data, workerId: req.params.id,
        },
      );
      return res.json({ newTips });
    }
    const newFeedBack = await FeedBack.create(
      {
        text, stars, workerId: req.params.id,
      },
    );
    return res.json({ newFeedBack });
  });
module.exports = router;
