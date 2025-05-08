// app/models/Influencer.js
import mongoose from 'mongoose'

const analyticsSchema = new mongoose.Schema({
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer' },
  date: { type: Date, default: Date.now },
  followers: Number,
  engagementRate: Number,
  platform: String, // 'Instagram', 'TikTok', etc.
})

const Analytics =
  mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema)
export default Analytics
