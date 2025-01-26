const Joi = require('joi');

const İnfoValidation = Joi.object().keys({
     category: Joi.string().required(),
     title: Joi.string().min(5).required(),
     description: Joi.string().min(5).required(),
     date: Joi.string().min(5).required(),
     images: Joi.array().items(Joi.string().min(5)).required(),
});

module.exports = İnfoValidation;