import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer' },
  date: { type: Date, default: Date.now },
  followers: Number,
})

// Avoid OverwriteModelError
export default mongoose.models?.Analytics || mongoose.model('Analytics', schema)
