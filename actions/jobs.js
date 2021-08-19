export const ALL_JOBS = "ALL_JOBS"

export const addAllJobs = (jobs) =>({
    type: ALL_JOBS,
    payload: jobs
})