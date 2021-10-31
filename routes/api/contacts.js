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

router.get('/', getContacts);

router.get('/:contactId', validateContactId, getContact);

router.post('/', validateContact, saveContact);

router.delete('/:contactId', validateContactId, removeContact);

router.put(
  '/:contactId',
  [validateContactId, validateContactPatch, validateContact],
  updateContact,
);

router.patch(
  '/:contactId/favorite',
  [validateContactId, validateStatusContact],
  updateStatusFavoriteContact,
);

module.exports = router;
