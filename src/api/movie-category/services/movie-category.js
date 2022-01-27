'use strict';

/**
 * movie-category service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-category.movie-category');
