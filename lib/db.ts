import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB Connected')
  } catch (error) {
    console.error('DB Error:', error)
    throw error
  }
}

export { connectDB } // Named export
