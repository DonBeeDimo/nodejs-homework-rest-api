const Joi = require("joi");

const schemaContact = Joi.object({
  id: Joi.string().min(1).max(20).required(),
  name: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(1).max(20).required(),
});

const schemaStatusContact = Joi.object({
  isVaccinated: Joi.boolean().required(),
});

const schemaPhone = Joi.object({});

const patternId = "\\w{1} || \\w{2}";

const schemaId = Joi.object({
  contactId: Joi.string().pattern(new RegExp(patternId)).required(),
});

const validate = async (schema, obj, res, next) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: `Field ${err.message.replace(/"/g, "")}`,
    });
  }
};

module.exports.validateContact = async (req, res, next) => {
  return await validate(schemaContact, req.body, res, next);
};

module.exports.validateStatusContact = async (req, res, next) => {
  return await validate(schemaStatusContact, req.body, res, next);
};

module.exports.validateContactId = async (req, res, next) => {
  return await validate(schemaId, req.params, res, next);
};
