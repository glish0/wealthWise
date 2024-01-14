const mongoose = require('mongoose')

const db = async () => {
  try {
    mongoose.set('strictQurey', false)
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Database connected')
  } catch (error) {
    console.log('Database connection failed')
  }
}


module.exports = { db }