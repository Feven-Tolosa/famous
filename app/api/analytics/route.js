// app/api/analytics/route.js
import { NextResponse } from 'next/server'
import Analytics from '@/models/Analytics'
import { connectDB } from '@/lib/db'
import { getCachedData, setCachedData } from './utils/cache'

// Connect to DB
await connectDB()

// Fetch analytics for a specific influencer
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const influencerId = searchParams.get('influencerId')
  const platform = searchParams.get('platform') || 'all'

  // Check cache first (Redis)
  const cacheKey = `analytics:${influencerId}:${platform}`
  const cachedData = await getCachedData(cacheKey)

  if (cachedData) {
    return NextResponse.json(cachedData)
  }

  // Query database
  const query = { influencerId }
  if (platform !== 'all') query.platform = platform

  const data = await Analytics.find(query).sort({ date: -1 }).limit(30) // Last 30 days

  // Format for charts
  const result = {
    followers: data.map((d) => ({
      date: d.date.toISOString().split('T')[0],
      count: d.followers,
    })),
    engagement: data.map((d) => ({
      date: d.date.toISOString().split('T')[0],
      rate: d.engagementRate,
    })),
  }

  // Cache for 1 hour (Redis)
  await setCachedData(cacheKey, result, 3600)

  return NextResponse.json(result)
}
