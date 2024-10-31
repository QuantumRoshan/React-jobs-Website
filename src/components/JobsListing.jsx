import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import JobListing from './JobListing'
import { PushSpinner } from 'react-spinners-kit'

const JobsListing = ({ isHome }) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    try {
      const fetchJobs = async () => {
        const url = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
        const res = await fetch(url)
        const data = await res.json() //takes the body from the res which is in json format and converts into array/object
        setJobs(data)
      }
      fetchJobs()
    } catch (error) {
      console.log('Could not fetch data', error)
    } finally {
      setLoading(false)
    }
  }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <div className="flex justify-center items-center py-40">
            <PushSpinner size={30} color="#686769" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

JobsListing.propTypes = {
  isHome: PropTypes.bool.isRequired,
}

export default JobsListing
