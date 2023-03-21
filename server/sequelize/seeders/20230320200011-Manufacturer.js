'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        await queryInterface.bulkInsert(
      "Manufacturers",
      [
        {
          company: "Minnesota Motor Company",
          full_name: "Jon Doe",
          job_title: "Director",
          email: "at@minesottaMotor.com",
          direct_dial:"+1-(234)-345-8973",
          location:"Australia",
          web_site: "www.motorcompany.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            company: "Fielders Manufacturing",
            full_name: "Jon Doe",
            job_title: "Vice President",
            email: "at@fielders.com",
            direct_dial:"+1-(234)-7832",
            location:"Australia",
            web_site: "www.fielders.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            company: "Aviation Purchasing Platform",
            full_name: "James Twanah",
            job_title: "Director",
            email: "at@aviation.com",
            direct_dial:"+1-(234)-345-9090",
            location:"USA",
            web_site: "www.aviation.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            company: "Timota Design Manufacturing",
            full_name: "Carl Jonson",
            job_title: "Manager",
            email: "at@timota.com",
            direct_dial:"+1-(234)-345-8989",
            location:"Australia",
            web_site: "www.timota.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Manufacturers", null, {});
  }
};
