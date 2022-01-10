"use strict";

/**
 * populate service.
 */

module.exports = () => ({
  async populate(params) {
    const cat = await strapi
      .service("api::category.category")
      .find({ name: "Action" });

    return cat;
  },
});
