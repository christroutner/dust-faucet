/*
  This file is used to store unsecure, application-specific data common to all
  environments.
*/

// const tenthBCH = 10000000
// const sats = 1000000

module.exports = {
  port: process.env.PORT || 7654,
  logPass: 'test',
  AUTHSERVER: process.env.AUTHSERVER ? process.env.AUTHSERVER : 'https://auth.fullstack.cash',
  APISERVER: process.env.APISERVER ? process.env.APISERVER : 'https://abc.fullstack.cash/v3/',
  BCHJSTOKEN: process.env.BCHJSTOKEN ? process.env.BCHJSTOKEN : '',
  stateFileName: 'state.json',
  FULLSTACKLOGIN: process.env.FULLSTACKLOGIN ? process.env.FULLSTACKLOGIN : 'demo@demo.com',
  FULLSTACKPASS: process.env.FULLSTACKPASS ? process.env.FULLSTACKPASS : 'demo',
  apiLevel: 10, // Tier of access: 10 = free, 20 = full node, 30 = indexer, 40 = SLP

  satsToSend: 5000, // Amount of satoshis to send on each request.
  appAddress: 'bchtest:qqmd9unmhkpx4pkmr6fkrr8rm6y77vckjvqe8aey35',
  // bchPerHour: sats * 10,

  emailServer: process.env.EMAILSERVER ? process.env.EMAILSERVER : 'mail.someserver.com',
  emailUser: process.env.EMAILUSER ? process.env.EMAILUSER : 'noreply@someserver.com',
  emailPassword: process.env.EMAILPASS ? process.env.EMAILPASS : 'emailpassword'
}
