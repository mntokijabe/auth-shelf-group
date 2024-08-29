const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on my shelf
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in get router')
  sqlText = `
  SELECT * FROM "item"
  WHERE "item"."user_id" = $1;`
  sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
  .then(dbRes => {
    res.send(dbRes.rows)
  })
  .catch(dbErr => {
    console.log('Error in get', dbErr)
    res.sendStatus(500)
  })
});







module.exports = router;
