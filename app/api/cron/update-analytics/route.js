// app/api/cron/update-analytics/route.js
import Analytics from '@/models/Analytics'
import { fetchInstagramAnalytics } from '../analytics/utils/social'

export async function GET() {
  const influencers = await Influencer.find({ isVerified: true })

  for (const influencer of influencers) {
    const data = await fetchInstagramAnalytics(influencer.accessToken)
    await Analytics.create({
      influencerId: influencer._id,
      followers: data.followers_count,
      engagementRate: data.engagement,
      platform: 'Instagram',
    })
  }

  return new Response('Analytics updated!', { status: 200 })
}
