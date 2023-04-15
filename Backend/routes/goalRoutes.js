const express = require('express');
const { getGoals, postGoals, updateGoals, deleteGoals } = require('../Controller/goalController');
const protect = require('../middleware/authorizationMiddleware');
const router = express.Router();

router.route('/',).get(getGoals).post(postGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals)


module.exports = router;