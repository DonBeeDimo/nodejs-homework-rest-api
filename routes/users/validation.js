const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const { ValidInfoContact, Subscription } = require('../../config/constants');

const schemaUserRegistration = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(7)
    .pattern(new RegExp(ValidInfoContact.patternPassword))
    .required(),
});

const schemaUserLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(7)
    .pattern(new RegExp(ValidInfoContact.patternPassword))
    .required(),
});

const schemaSubscriptionUser = Joi.object({
  subscription: Joi.string()
    .valid(Subscription.STARTER, Subscription.PRO, Subscription.BUSINESS)
    .required(),
});

const validate = async (schema, obj, res, next) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: `Field ${err.message.replace(/"/g, '')}`,
    });
  }
};

module.exports.validateUserRegistration = async (req, res, next) => {
  return await validate(schemaUserRegistration, req.body, res, next);
};

module.exports.validateUserLogin = async (req, res, next) => {
  return await validate(schemaUserLogin, req.body, res, next);
};

module.exports.validateSubscriptionUser = async (req, res, next) => {
  return await validate(schemaSubscriptionUser, req.body, res, next);
};
