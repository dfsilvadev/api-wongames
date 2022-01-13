"use strict";

/**
 * A set of functions called "actions" for `populate`
 */

module.exports = ({ strapi }) => ({
  async populate(ctx) {
    console.log("Starting to populate...");

    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    await strapi.service("api::game.populate").populate(options);

    ctx.send("Finished populating");
  },
});
