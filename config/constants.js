const ValidInfoContact = {
  patternPhone: '\\s?[\\(]{0,1}[0-9]{3}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{4}',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  NONE: 'none',
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 204,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
  ValidInfoContact,
  Gender,
  HttpCode,
};
