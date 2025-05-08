// app/api/analytics/utils/cache.js
import { createClient } from 'redis'

const redisClient = createClient({
  url: process.env.REDIS_URL,
})

redisClient.on('error', (err) => console.error('Redis error:', err))
await redisClient.connect()

export async function getCachedData(key) {
  try {
    const data = await redisClient.get(key)
    return data ? JSON.parse(data) : null
  } catch (err) {
    console.error('Cache read error:', err)
    return null
  }
}

export async function setCachedData(key, value, ttl = 3600) {
  try {
    await redisClient.set(key, JSON.stringify(value), { EX: ttl })
  } catch (err) {
    console.error('Cache write error:', err)
  }
}
