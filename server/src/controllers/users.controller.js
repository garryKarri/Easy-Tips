const { Worker } = require('../../db/models');

const editUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    try {
      // eslint-disable-next-line max-len
      const [, updatedUser] = await Worker.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

const getUser = async (req, res) => {
  try {
    if (req.session) {
      const { id } = req.session.user;
      console.log(id);
      const currentUser = await Worker.findByPk(id);
      console.log(currentUser);
      // setTimeout(() =>
      return res.json(currentUser);
      // , 2e3);
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Worker.findAll();
    return res.json(allUsers);
  } catch (error) {
    return res.sendStatus(500);
  }
};
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await Worker.findByPk(id);
    return res.json(oneUser);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  editUser,
  getUser,
  getAllUsers,
  getOneUser,
};
