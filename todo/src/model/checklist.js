// Description: This file contains the schema for the checklist model

// Import mongoose- mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose');

//creating the schema for the checklist model
const checklistSchema = new mongoose.Schema({
    name: {type : String, required: true},
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
});

//exporting the checklist model
module.exports = mongoose.model('Checklist', checklistSchema);