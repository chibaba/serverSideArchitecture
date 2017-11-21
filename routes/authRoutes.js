
const passport = require ('passport');
module.exports = (app) => {
app.get('/auth/google', 
passport.authenticate('google', {
scope: ['profile', 'email']
}))

app.use(
  '/auth/google/callback',
   passport.authenticate('google'),
   (req, res) => {
     res.redirect('/surveys')
   }
  );


  app.use('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  });

app.get('/api/current_user', (req, res) => {  
  res.send(req.user);
})
};