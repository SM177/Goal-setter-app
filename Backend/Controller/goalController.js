const AsyncHandler = require('express-async-handler');
const Goals = require('../models/goalModels')

const getGoals = AsyncHandler(async (req, res) => {
    const goals = await Goals.find({user:req.user.id});
    res.status(200).json({
        goals,
    })
})

const postGoals = AsyncHandler(async (req, res) => {
    let goal = req.body.goal;
    if (!goal) {
        res.status(400);
        throw new Error('Please fill out all the fields')
    }
    const goals = await Goals.create({
        goals: req.body.goal,
        user: req.user.id,
    })
    res.status(200).json({
        goals,
    })
})

const updateGoals = AsyncHandler(async (req, res) => {
    // check id the if exists
    const checkGoal = await Goals.findById(req.params.id);
    if (!checkGoal) {
        res.status(404);
        throw new error('goal not found');
    }
    const updatedGoals = await Goals.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({
        message: `id no:${req.params.id} updated`
    })
})

const deleteGoals = AsyncHandler(async (req, res) => {
    const goal = await Goals.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found')
    }
    await goal.deleteOne();
    res.status(200).json({
            _id: goal.id,
        })
});

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals
}