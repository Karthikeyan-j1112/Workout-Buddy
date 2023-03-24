const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')

const getWorkouts = (req, res) => {
    Workout.find({user_id:req.user.id})
        .sort({ createdAt: -1 })
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: "There are no Workout exists" })
            }
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

const getWorkoutById = (req, res) => {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.status(404).json({ error: "No such Workout exist" })
    }
    Workout.findOne( {_id : req.params.id ,user_id:req.user.id} )
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: "No such Workout exist" })
            }
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

const createWorkout = (req, res) => {    

    const workout = new Workout({...req.body , user_id:req.user._id })   
    
    workout.save()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

const deleteWorkout = (req, res) => {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.status(404).json({ error: "No such Workout exist" })
    }
    Workout.findByIdAndDelete(req.params.id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: "No such Workout exist" })
            }
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

const updateWorkout = (req, res) => {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.status(404).json({ error: "No such Workout exist" })
    }
    Workout.findByIdAndUpdate(req.params.id, {...req.body , user_id:req.user._id })
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: "No such Workout exist" })
            }
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}