module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Workers', [{
      userName: 'Faig',
      surname: 'Rauf',
      email: 'shoma05@mail.ru',
      password: '123',
      walletNumber: '12345678',
      image: undefined,
      companyId: 1,
      aboutWorker: 'На самом деле у меня есть бизнес, а работа заправщиком это хобби',
      instagram: 'https://www.instagram.com/gusein.gasanov/?hl=ru',
      rating: 5,
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
    await queryInterface.bulkDelete('Workers', null, {});
  },
};
