import mongoose from 'mongoose'

const influencerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    followers: { type: Number, default: 0 },
    niche: { type: String, required: true },
    socialMedia: {
      instagram: String,
      youtube: String,
      tiktok: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Influencer ||
  mongoose.model('Influencer', influencerSchema)
