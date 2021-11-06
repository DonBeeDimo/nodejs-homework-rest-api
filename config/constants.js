const ValidInfoContact = {
  patternPhone: '\\s?[\\(]{0,1}[0-9]{3}[\\)]{0,1}\\s?\\d{3}[-]{0,1}\\d{4}',
  patternPassword: '^[a-zA-Z0-9]{3,30}$',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  NONE: 'none',
};

const Subscription = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
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
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
  ValidInfoContact,
  Subscription,
  Gender,
  HttpCode,
};
