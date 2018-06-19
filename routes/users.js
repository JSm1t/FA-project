const express = require('express');
const router = express.Router();
const usersFile = require('../data/users.json');
const utils = require('../utils');



/* GET users listing. */
router.get('/', (req, res, next) => {
  const { q, team_id, sortBy } = req.query;
  const results = [...usersFile];
  let sortBySan = (sortBy === 'firstName' || sortBy === 'lastName' || sortBy === 'id') ? sortBy : 'firstName';
  
  const sortedResults = utils.sortByProperty(usersFile, sortBySan);
  
  res.status(200).send(sortedResults);
});

module.exports = router;
