"use strict";

/**
 * populate service.
 */

const axios = require("axios");
const slugify = require("slugify");

async function getGameInfo(slug) {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const body = await axios.get(`https://www.gog.com/game/${slug}`);
  const dom = new JSDOM(body.data);

  const description = dom.window.document.querySelector(".description");

  return {
    rating: "BR0",
    short_description: description.textContent.slice(0, 160),
    description: description.innerHTML,
  };
}

module.exports = ({ strapi }) => ({
  async populate(params) {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;

    const {
      data: { products },
    } = await axios.get(gogApiUrl);

    await strapi.entityService.create("api::publisher.publisher", {
      data: {
        name: products[0].publisher,
        slug: slugify(products[0].publisher).toLowerCase(),
      },
    });

    await strapi.entityService.create("api::developer.developer", {
      data: {
        name: products[0].developer,
        slug: slugify(products[0].developer).toLowerCase(),
      },
    });
  },
});
