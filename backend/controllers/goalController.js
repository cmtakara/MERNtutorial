const asyncHandler = require('express-async-handler')

// @desc Get goal
// @route GET /api/goals
// @access Private  
// after authentication is added
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get goals in controller'})
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


    console.log(req.body)

    res.status(200).json({message: 'Set goal in controller' })
})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private  
// after authentication is added
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id} in controller`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private  
// after authentication is added
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id} in controller`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}