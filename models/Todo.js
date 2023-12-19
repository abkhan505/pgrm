const mongoose = require('mongoose') // Pulls in Mongoose

const TodoSchema = new mongoose.Schema({ // Mongoose schema
  todo: {
    type: String,
    required: true, // Mandatory field to be filled
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
