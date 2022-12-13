'use strict';

/**
 * recommended service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended.recommended');
