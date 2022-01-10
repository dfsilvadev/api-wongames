"use strict";

/**
 * A set of functions called "actions" for `populate`
 */

module.exports = ({ strapi }) => ({
  async populate(ctx) {
    console.log("Starting to populate...");

    const respose = await strapi.service("api::game.populate").populate();

    console.log(respose);

    ctx.send({ ok: "Populate" });
  },
});
