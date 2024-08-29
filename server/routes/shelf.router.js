const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('in get router')
  sqlText = `
  SELECT * FROM "item"`
  pool.query(sqlText)
  .then(dbRes => {
    res.send(dbRes.rows)
  })
  .catch(dbErr => {
    console.log('Error in get', dbErr)
    res.sendStatus(500)
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',rejectUnauthenticated, (req, res) => {
  let description = req.body.description
  let image = req.body.image_url
  let user = req.body.user_id
  // endpoint functionality
  console.log('req.body', req.body);
  let queryText = `
  INSERT INTO "item"
     ("description", "image_url", "user_id")
     VALUES
     ($1, $2, $3)`;

  let queryValues = [description, image, user];

  pool.query(queryText, queryValues)
   .then(result => {
    res.sendStatus(201)
    })
    .catch(error => {
      console.log('error adding an item ', error)
      })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  pool.query(`DELETE FROM "item" WHERE "id" = $1;`, [req.params.id])
  .then(result => {
    res.sendStatus(200)
  })
  .catch(error => {
    console.log('Error in delete', error)
    res.sendStatus(500)
})
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
