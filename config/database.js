//creating a secrete code
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/meanblog-2', //+ this.db, database URI and database name
  secrete: crypto, // Crypto-created secrete
  db: 'meanblog-2' // DB name
}
