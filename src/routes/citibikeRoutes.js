'use strict';

const Joi = require('joi');
let citibikeHandler = require('../handler/citibikeHandler');

module.exports = function (server, options) {
    // read
    server.route({
      method: 'get',
      path: '/v1/gbfsFeed',
      config: {
        handler: citibikeHandler.gbfsFeed,
        description: 'GET gbfsFeed for READING gbfs latest url',
        notes: 'Returns a list of gbfs urls',
        tags: ['api'],
        validate: {}
      }
    });

    server.route({
      method: 'get',
      path: '/v1/gbfsStationStatus',
      config: {
        handler: citibikeHandler.gbfsStationStatus,
        description: 'GET gbfsFeed for  gbfs latest station status',
        notes: 'Returns a list station with current status',
        tags: ['api'],
        validate: {}
      }
    });

    server.route({
      method: 'get',
      path: '/v1/gbfsStationInfo',
      config: {
        handler: citibikeHandler.gbfsStationInformation,
        description: 'GET gbfsFeed for  gbfs latest station information',
        notes: 'Returns a list station with current information',
        tags: ['api'],
        validate: {

        }
      }
    });

    server.route({
      method: 'get',
      path: '/v1/gbfsSystemAlerts',
      config: {
        handler: citibikeHandler.gbfsSystemAlerts,
        description: 'GET gbfsFeed for  gbfs latest system alerts',
        notes: 'Returns a list system alerts',
        tags: ['api'],
        validate: {}
      }
    });

    server.route({
      method: 'post',
      path: '/v1/addressNearBy',
      config: {
        handler: citibikeHandler.addressNearBy,
        description: 'Match given cordinates with available data',
        notes: 'Returns a list sorted cordinates stations',
        tags: ['api'],
        validate: {
          payload: Joi.object().keys({
            lat: Joi.number().required(),
            lon: Joi.number().required()
          })
        }
      }
    });

  } //end of module.exports function