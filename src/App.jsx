import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './Layouts/MainLayouts'
import JobPage from './pages/JobPage'
import NotFound from './pages/NotFound'
import SingleJob from './pages/SingleJob'
import jobLoader from './components/jobLoader'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {
  //Add new job
  const addJob = async (newJob) => {
    await fetch('/api/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return
  }
  //Delete new job
  const deleteJob = async (id) => {
    // console.log('delete', id)
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }
  //Edit job
  const editJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <HomePage />, //whatever element is here and so below goes to the outlet as per the path
        },
        {
          path: '/jobs',
          element: <JobPage />,
        },
        {
          path: '/jobs/:id',
          element: <SingleJob deleteJob={deleteJob} />,
          loader: jobLoader,
        },
        {
          path: '/edit-job/:id',
          element: <EditJobPage editJob={editJob} />,
          loader: jobLoader,
        },
        {
          path: '/add-job',
          element: <AddJobPage addJobSubmit={addJob} />,
        },
        {
          path: '*', // Wildcard path for not found pages
          element: <NotFound />, // Render NotFound component when no other routes match
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App

//start form edit
