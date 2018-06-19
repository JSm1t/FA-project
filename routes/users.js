const express = require('express');
const router = express.Router();
const usersFile = require('../data/users.json');
const utils = require('../utils');

/* GET lists of Users */
router.get('/', (req, res, next) => {
  const { q, team_id, sortBy } = req.query;
  let results = [...usersFile];
  let sortBySan = (sortBy === 'firstName' || sortBy === 'lastName' || sortBy === 'id') ? sortBy : 'firstName';
  
  // q should search based on firstName and lastName
  if(q && typeof q ==='string') {
    results = utils.filterByProperties(results, ['firstName', 'lastName'], q.replace(' ', ''));
  }

  // team_id should filter based on team id
  if(team_id) {
    let intTeam_id
    try {
      intTeam_id = parseInt(team_id);
    } catch (err) {
      err.message = `Team_id ${team_id} is not a valid team_id`;
      return next(err);
    }
    results = utils.filterByProperty(results, 'teams', intTeam_id);
  }
  
  //Sort results based on given property
  results = utils.sortByProperty(results, sortBySan);
  
  res.status(200).send(results);
});

module.exports = router;
