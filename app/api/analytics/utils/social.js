// app/api/analytics/utils/social.js
export async function fetchInstagramAnalytics(accessToken) {
  const response = await fetch(
    `https://graph.instagram.com/me?fields=followers_count,engagement&access_token=${accessToken}`
  )
  return await response.json()
}

// Similar for TikTok/YouTube...
