const express = require('express')
const router = express.Router()
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
} = require('../controllers/goalController')


// combines the first two since their routes are the same
router.route('/').get(getGoals).post(setGoal)

// combines the second two since their routes are the same
router.route('/:id').put(updateGoal).delete(deleteGoal)

// changed from app to router when moved 
// also updated /api/goals to / because in server.js updaed so that /api/goals is defined there
// move the entire function for all routes to controllers, and then import and call that function
// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals updated'})
// })
// router.get('/', getGoals)

// router.post('/', setGoal)


// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router