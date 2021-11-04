const express = require('express');
const router = express.Router();
const {
  getContacts,
  getContact,
  saveContact,
  removeContact,
  updateContact,
  updateStatusFavoriteContact,
} = require('../../controllers/contacts');
const {
  validateContact,
  validateContactPatch,
  validateStatusContact,
  validateContactId,
} = require('./validation');

const guard = require('../../helpers/guard');
const role = require('../../helpers/role');
const wrapError = require('../../helpers/errorHandler');
const { Gender } = require('../../config/constants');

router.get('/', guard, wrapError(getContacts));

router.get(
  '/test',
  guard,
  role(Gender.MALE),
  wrapError((req, res, next) => {
    res.json({
      status: 'success',
      code: 200,
      data: { message: 'Only for man' },
    });
  }),
);

router.get('/:contactId', guard, validateContactId, wrapError(getContact));

router.post('/', guard, validateContact, wrapError(saveContact));

router.delete(
  '/:contactId',
  guard,
  validateContactId,
  wrapError(removeContact),
);

router.put(
  '/:contactId',
  guard,
  [validateContactId, validateContactPatch, validateContact],
  wrapError(updateContact),
);

router.patch(
  '/:contactId/favorite',
  guard,
  [validateContactId, validateStatusContact],
  wrapError(updateStatusFavoriteContact),
);

module.exports = router;
