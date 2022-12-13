'use strict';

/**
 * recommended router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recommended.recommended');
