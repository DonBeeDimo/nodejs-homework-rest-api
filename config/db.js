const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI_DB;

const db = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection to DB');
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error ${err.message}`);
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Connection to DB closed');
  process.exit();
});

// client.connect(err => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

module.exports = db;

// const fs = require('fs/promises');
// const path = require('path');

// class FileAdapter {
//   constructor(file) {
//     this.store = path.join(__dirname, file);
//   }

//   async read() {
//     const result = await fs.readFile(this.store, "utf-8");
//     const data = JSON.parse(result);
//     return data;
//   }

//   async write(data) {
//     await fs.writeFile(this.store, JSON.stringify(data));
//   }
// }

// module.exports = FileAdapter;
