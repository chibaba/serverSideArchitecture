const Keys = require ('../config/keys');

const stripe = require ('stripe')(Keys.stripeSecretKey);


module.exports = app => {
  app.post('/api/stripe', (req, res)=> {})
}