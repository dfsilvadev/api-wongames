'use strict';

/**
 *  recommended controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recommended.recommended');
