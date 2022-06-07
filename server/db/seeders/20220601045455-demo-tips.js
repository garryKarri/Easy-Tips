module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tips', [{
      tipSize: 100,
      data: new Date(),
      status: true,
      workerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      tipSize: 10,
      data: new Date(),
      status: true,
      workerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tipSize: 150,
      data: new Date(),
      status: true,
      workerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tipSize: 50,
      data: new Date(),
      status: true,
      workerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      tipSize: 76,
      data: new Date(),
      status: true,
      workerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tips', null, {});
  },
};
