const bcrypt = require('bcrypt') // Encrypts user password
const mongoose = require('mongoose') // Inserts mongoose

const UserSchema = new mongoose.Schema({ // Schema for UserName, stores googleID and firstName
  googleId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


// Password hash middleware.
 
/*  UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
}) */


// Helper method for validating user's password.

/* UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
} */


module.exports = mongoose.model('User', UserSchema)
