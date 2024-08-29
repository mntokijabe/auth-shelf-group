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
router.post('/', (req, res) => {
  // endpoint functionality
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
