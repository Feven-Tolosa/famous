'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Mock job data (replace with actual data fetching logic)
const job = {
  id: 1,
  companyName: 'Tech Innovators',
  description: 'Looking for a tech influencer to promote our new AI tool.',
  language: 'English',
  niche: 'Technology',
  location: 'Remote',
  price: '$500',
  requirements: 'Must have at least 10k followers on Instagram or YouTube.',
  deliverables: 'Create 3 posts and 1 video review.',
  deadline: '2023-12-31',
}

export default function JobDetailsPage() {
  const router = useRouter()
  const [proposal, setProposal] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    // Simulate API call to submit the proposal
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/submit-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId: job.id,
          proposal,
        }),
      })

      if (response.ok) {
        alert('Proposal submitted successfully!')
        router.push('/jobs') // Redirect to jobs page after submission
      } else {
        throw new Error('Failed to submit proposal')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred while submitting the proposal.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='bg-slate-900'>
      <h1 className='text-3xl font-bold text-center  p-8'>Job Details</h1>
      <div className='min-h-screen bg-slate-900 p-6 text-white'>
        {/* Job Details Section */}
        <div className='bg-slate-800 p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-bold mb-4'>{job.companyName}</h2>
          <p className='text-blue-100 mb-4'>{job.description}</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
            <div>
              <p className='text-sm text-textPrimary'>
                Language: {job.language}
              </p>
              <p className='text-sm text-textPrimary'>Niche: {job.niche}</p>
              <p className='text-sm text-textPrimary'>
                Location: {job.location}
              </p>
            </div>
            <div>
              <p className='text-sm text-textPrimary'>Price: {job.price}</p>
              <p className='text-sm text-textPrimary'>
                Deadline: {job.deadline}
              </p>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Requirements</h3>
            <p className='text-sm text-textPrimary'>{job.requirements}</p>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Deliverables</h3>
            <p className='text-sm text-textPrimary'>{job.deliverables}</p>
          </div>
        </div>
        {/* Proposal Form Section */}
        <div className='bg-slate-800 p-6 rounded-lg  shadow-md'>
          <h2 className='text-2xl font-bold text-primary mb-4'>
            Submit Your Proposal
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='proposal'
                className='block text-sm font-medium mb-2'
              >
                Proposal
              </label>
              <textarea
                id='proposal'
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                className='w-full p-2 border rounded text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary'
                rows={6}
                placeholder='Explain why you are the best fit for this job...'
                required
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-bgService text-primary px-4 py-2 rounded hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
