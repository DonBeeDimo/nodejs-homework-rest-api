const express = require('express');
const router = express.Router();
const {
  validateUserRegistration,
  validateUserLogin,
  validateSubscriptionUser,
} = require('./validation');
const {
  registration,
  login,
  logout,
  current,
  updateSubscription,
  userStarter,
  userPro,
  userBusiness,
} = require('../../controllers/users');
const guard = require('../../helpers/guard');
const loginLimit = require('../../helpers/rate-limit-login');
const { Subscription } = require('../../config/constants');
const role = require('../../helpers/role');

router.patch('/', guard, validateSubscriptionUser, updateSubscription);
router.get('/starter', guard, role(Subscription.STARTER), userStarter);
router.get('/pro', guard, role(Subscription.PRO), userPro);
router.get('/business', guard, role(Subscription.BUSINESS), userBusiness);
router.post('/registration', validateUserRegistration, registration);
router.post('/login', loginLimit, validateUserLogin, login);
router.post('/logout', guard, logout);
router.get('/current', guard, current);

module.exports = router;
