const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get goal
// @route GET /api/goals
// @access Private  
// after authentication is added
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc Set goal
// @route POST /api/goals
// @access Private  
// after authentication is added
const setGoal = asyncHandler (async (req, res) => {
    // setting the body as url encoded in Postman to start
    if (!req.body.text) {
        res.status(400)
        throw new  Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    console.log(req.body)

    res.status(200).json(goal)
})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private  
// after authentication is added
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private  
// after authentication is added
const deleteGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}