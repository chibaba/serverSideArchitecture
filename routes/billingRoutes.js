const Keys = require ('../config/keys');

const stripe = require ('stripe')(Keys.stripeSecretKey);


module.exports = app => {
  app.post('/api/stripe', async (req, res)=> {
    const charge = await stripe.charges.create({
      amount:500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    req.user.credits +=5;
    const user = await req.user.save()

    res.send(user)
    const user = await req.user.save();

    res.send(user);
  })
}