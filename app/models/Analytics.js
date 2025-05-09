// models/Analytics.js
import mongoose from 'mongoose'

const analyticsSchema = new mongoose.Schema({
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer' },
  date: { type: Date, default: Date.now },
  followers: Number,
  engagementRate: Number,
  platform: String,
})

// Prevent model overwrite in dev mode
export default mongoose.models?.Analytics ||
  mongoose.model('Analytics', analyticsSchema)
