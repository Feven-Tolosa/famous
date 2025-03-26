'use client'
import { useState } from 'react'

const jobs = [
  {
    id: 1,
    companyName: 'Tech Innovators',
    description: 'Looking for a tech influencer to promote our new AI tool.',
    language: 'English',
    niche: 'Technology',
    location: 'Remote',
    price: '$500',
  },
  {
    id: 2,
    companyName: 'Fashion Forward',
    description: 'Seeking a fashion influencer for a summer campaign.',
    language: 'French',
    niche: 'Fashion',
    location: 'Paris, France',
    price: '$800',
  },
  {
    id: 3,
    companyName: 'Health & Wellness Co.',
    description: 'Need a fitness influencer to promote our new protein shake.',
    language: 'English',
    niche: 'Health & Fitness',
    location: 'New York, USA',
    price: '$600',
  },
]

export default function JobsPage() {
  const [filters, setFilters] = useState({
    price: '',
    language: '',
    niche: '',
  })
  const [searchTerm, setSearchTerm] = useState('') // State for search term

  // Filter jobs based on filters and search term
  const filteredJobs = jobs.filter((job) => {
    const matchesFilters =
      (filters.price === '' || job.price <= filters.price) &&
      (filters.language === '' || job.language === filters.language) &&
      (filters.niche === '' || job.niche === filters.niche)

    const matchesSearch =
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilters && matchesSearch
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='min-h-screen bg-slate-800 p-6'>
      <h1 className='text-3xl font-bold text-center mb-12'>Influencer Jobs</h1>

      {/* Search Input with Icon */}
      <div className='mb-12 flex justify-center'>
        <div className='relative w-full max-w-md'>
          <input
            type='text'
            placeholder='Search by company or description...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='w-full p-2 pl-3 pr-10 border rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {/* Search Icon */}
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-slate-500'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className='mb-20 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center'>
        <div className='w-full md:w-auto'>
          <select title='niche'
            name='niche'
            onChange={handleFilterChange}
            className='w-full md:w-48 p-2 border rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value=''>Filter by Niche</option>
            <option value='Technology'>Technology</option>
            <option value='Fashion'>Fashion</option>
            <option value='Health & Fitness'>Health & Fitness</option>
          </select>
        </div>
        <div className='w-full md:w-auto'>
          <select title='language'
            name='language'
            onChange={handleFilterChange}
            className='w-full md:w-48 p-2 border rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value=''>Filter by Language</option>
            <option value='English'>English</option>
            <option value='French'>French</option>
          </select>
        </div>
        <div className='w-full md:w-auto'>
          <select title='price'
            name='price'
            onChange={handleFilterChange}
            className='w-full md:w-48 p-2 border rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value=''>Filter by Price</option>
            <option value='500'>$500</option>
            <option value='600'>$600</option>
            <option value='800'>$800</option>
          </select>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredJobs.map((job) => (
          <div key={job.id} className='bg-borderColor p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold mb-2'>{job.companyName}</h2>
            <p className='text-blue-100 mb-4'>{job.description}</p>
            <div className='flex space-x-4 text-sm text-textPrimary mb-4'>
              <span>{job.language}</span>
              <span>{job.niche}</span>
              <span>{job.location}</span>
            </div>
            <p className='text-lg font-semibold mb-4'>{job.price}</p>
            <button className='bg-overlay text-white px-4 py-2 rounded hover:bg-slate-500'>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
