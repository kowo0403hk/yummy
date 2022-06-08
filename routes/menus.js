const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

// Helper functions
const { countAllDishes } = require('../lib/helper');

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2', 'key3']
}));

const menusRouter = (db) => {
  // GET /menus/
  router.get('/', (req, res) => {
    //  Assume that user 1 has logged in, hash the user ID and store it into the cookie
    if (!req.session.userID) {
      req.session.userID = '1';
    }

    //  Query all dishes from database
    db.query('SELECT * FROM dishes;')
      .then((results) => {
        const count = countAllDishes(req.session.cart);
        res.send([results.rows, count]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // GET /menus/:id

  // return router
  return router;
};

module.exports = menusRouter;
