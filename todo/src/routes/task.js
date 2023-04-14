const express = require('express');

const checklistDependentRoute = express.Router();

const Checklist = require('../model/checklist');

const Task = require('../model/task');

checklistDependentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = new Task();
        res.status(200).render('tasks/new', {task, checklistId: req.params.id});
    } catch (error) {
        console.log(error);
        res.status(422).render('pages/error', {error});
    }
});

module.exports = {checklistDependent : checklistDependentRoute}