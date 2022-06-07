const router = require('express').Router();
const upload = require('../middleware/uploadMiddle');
const { Worker } = require('../../db/models');

//    /lk     выдача всех юзеров
router.route('/')
  .get(async (req, res) => {
    const worker = await Worker.findAll({
      raw: true,
      order: [['createdAt', 'ASC']],
    });
    res.json(worker);
  });

//   /lk/add
router.route('/add')
  .post(upload.single('img'), async (req, res) => {
    const newWorker = await Worker.create(
      { ...req.body, image: req.file?.filename },
    );
    res.json({ newWorker });
  });

//   /lk/:id
router.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Worker.findOne({ where: { id: req.params.id } });
      res.json(result);
    } catch (error) {
      res.sendStatus(418);
    }
  })
  .delete(async (req, res) => {
    try {
      await Worker.destroy({ where: { id: req.params.id } });
      res.status(202).json({ message: 'deleted' });
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .put(upload.single('img'), async (req, res) => {
    console.log('START EDIT >>>>>>>>>>>>>>>');
    const {
      userName, surname, walletNumber, about, image,
    } = req.body;

    console.log(req.body, '!!!!!!!!!!!!!!!!!!');
    const userData = {};
    if (about) { userData.aboutWorker = about; }
    if (userName) { userData.userName = userName; }
    if (image) { userData.image = req.file?.originalname; }
    console.log('---------', req.file?.originalname);
    if (req.file?.originalname) {
      userData.image = req.file.originalname;
    }

    if (walletNumber) { userData.walletNumber = walletNumber; }
    if (surname) { userData.surname = surname; }

    if (Object.keys(userData).length) {
      console.log('userData-----', userData, ((req.params.id) || req.body.id));
      const updatePost = await Worker.update(
        { ...userData },

        { where: { id: Number(req.params.id) || Number(req.body.id) } },
      );
      console.log(updatePost, 'sssssssss');
    }
    const result = await Worker.findOne({ where: { id: +req.params.id }, raw: true });
    console.log(result);
    return res.json({ result });
  });

module.exports = router;
