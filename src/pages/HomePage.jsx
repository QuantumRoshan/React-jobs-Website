import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListing from '../components/JobsListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title="React jobs default" subtitle="Find your dream job here" />
      <HomeCards />
      <JobsListing isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
