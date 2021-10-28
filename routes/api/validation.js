const Joi = require('joi');

const patternPhone = '\\s?[\\(]{0,1}[0-9]{3}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{4}';

const schemaContact = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(new RegExp(patternPhone)).required(),
  isVaccinated: Joi.boolean().optional(),
});

const schemaContactPatch = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(new RegExp(patternPhone)).required(),
  isVaccinated: Joi.boolean().optional(),
});

const schemaStatusContact = Joi.object({
  isVaccinated: Joi.boolean().required(),
});

const patternId = '\\w{8}-\\w{4}-\\w{4}-\\w{4}-\\w{12}';

const schemaId = Joi.object({
  contactId: Joi.string().pattern(new RegExp(patternId)).required(),
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

module.exports.validateContact = async (req, res, next) => {
  return await validate(schemaContact, req.body, res, next);
};

module.exports.validateContactPatch = async (req, res, next) => {
  return await validate(schemaContactPatch, req.body, res, next);
};

module.exports.validateStatusContact = async (req, res, next) => {
  return await validate(schemaStatusContact, req.body, res, next);
};

module.exports.validateContactId = async (req, res, next) => {
  return await validate(schemaId, req.params, res, next);
};
