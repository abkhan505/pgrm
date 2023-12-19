const mongoose = require('mongoose') // Pulls in Mongoose which allows for the usage of schema's

const connectDB = async () => { // () => {} syntax 
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, { // Mongoose connecting to DB
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`) // Successful connection to DB
  } catch (err) { // Failed connection to DB
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
