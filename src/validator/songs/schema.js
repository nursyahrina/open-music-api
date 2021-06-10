const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required().integer(),
  performer: Joi.string().required(),
  genre: Joi.string(),
  duration: Joi.number().integer(),
});

module.exports = { SongPayloadSchema };
