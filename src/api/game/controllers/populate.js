"use strict";

/**
 * A set of functions called "actions" for `populate`
 */

module.exports = {
  async populate(ctx) {
    console.log("Starting to populate...");
    console.log(ctx);
    ctx.send({ ok: true });
  },
};
