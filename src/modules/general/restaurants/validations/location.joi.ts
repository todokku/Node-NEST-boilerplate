import * as Joi from '@hapi/joi';

export const locationValidator = Joi.object({
  latitude: Joi.number(),
  longitude: Joi.number(),
});
