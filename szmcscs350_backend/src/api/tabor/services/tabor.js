'use strict';

/**
 * tabor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tabor.tabor');
