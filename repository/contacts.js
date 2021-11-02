const Contact = require('../model/contact');

// const getCollection = async (db, name) => {
//   const client = await db;
//   const collection = await client.db().collection(name);
//   return collection;
// };

const listContacts = async () => {
  // const collection = await getCollection(db, 'contacts');
  const results = await Contact.find({});
  return results;
};

const getContactById = async contactId => {
  // const collection = await getCollection(db, 'contacts');
  // const oid = new ObjectId(contactId);
  const result = await Contact.findById(contactId);
  return result;
};

const removeContact = async contactId => {
  // const collection = await getCollection(db, 'contacts');
  // const oid = new ObjectId(contactId);
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  return result;
};

const addContact = async body => {
  // const newContact = {
  //   isVaccinated: false,
  //   ...body,
  // };
  // const collection = await getCollection(db, 'contacts');
  const result = await Contact.create(body);
  return result;
};

const updateContact = async (contactId, body) => {
  // const collection = await getCollection(db, 'contacts');
  // const oid = new ObjectId(contactId);
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { ...body },
    { new: true },
  );
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
