// lib/db.js
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Database connection failed')
  }
}

export { connectDB }
