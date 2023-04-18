const express = require('express');

const router = express.Router();

const Checklist = require('../model/checklist');

const Task = require('../model/task');
const checklist = require('../model/checklist');

router.get('/:id/tasks/new', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        let task = new Task();
        res.status(200).render('tasks/new', {task, checklist : checklist})
    } catch (error) {
      
        res.status(422).render('pages/error', {error : error});
    }
});

router.delete('/:id/', async (req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id);
        let checklist = await Checklist.findById(task.checklist);
        let taskToRemove = checklist.tasks.indexOf(task._id);
        checklist.tasks.splice(taskToRemove, 1);
        await checklist.save();
        res.redirect(`/checklists/${checklist._id}`);

    }catch(error){
        res.status(422).render('pages/error', {error : error});
    }
})

router.post('/:id/tasks', async (req, res) =>{
   
        let {name} = req.body.task;
        let task = new Task({name, checklist : req.params.id});

    try{ 
        await task.save();
        let checklist = await Checklist.findById(req.params.id);
        checklist.tasks.push(task);
        await checklist.save();
        res.redirect(`/checklists/${req.params.id}`);

    }catch(error){
        let errors = error.errors;
        res.status(422).render('tasks/new', {task: {...task, errors}, checklist : req.params.id})

    }
})

router.put('/:id', async(req, res) =>{
    let task = await Task.findById(req.params.id);
    try {
       task.set(req.body.task);
       await task.save();
       // asynchronous call - why ?  - because we don't want to wait for the response.
       res.status(200).json({task});
    } catch (error) {
        let errors = error.errors
        res.status(422).json({task : {...errors}});
    }
})

module.exports = router;
