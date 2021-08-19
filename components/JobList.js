import React from 'react'
import { useSelector } from 'react-redux'
import JobCard from './JobCard'

const JobList = () => {
    // get jobs data from redux-store
    const jobs = useSelector(state => state.jobsReducer);
    return (
        <section className="job-list-container">
            {
                jobs.map(job => <JobCard key={job.OBJcompanyID+Math.random()} {...job}/>)
            }
        </section>
    )
}

export default JobList

