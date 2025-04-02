import clientPromise from '@/lib/db'
import influencers from '@/influencers.json'
import jobListings from '@/job_listings.json'

async function migrate() {
  try {
    const client = await clientPromise
    const db = client.db()

    // Insert influencers
    if (influencers.length > 0) {
      await db.collection('influencers').insertMany(influencers)
      console.log(`Inserted ${influencers.length} influencers`)
    }

    // Insert job listings
    if (jobListings.length > 0) {
      await db.collection('job_listings').insertMany(jobListings)
      console.log(`Inserted ${jobListings.length} job listings`)
    }
  } catch (e) {
    console.error('Migration failed:', e)
  } finally {
    process.exit(0)
  }
}

migrate()
