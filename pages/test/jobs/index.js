import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { addAllJobs } from "../../../actions/jobs";
import FilterJobs from "../../../components/FilterJobs";
import Loading from "../../../components/Loading";
import Head from 'next/head'

//dynamic import JobList list component 
const JobList = dynamic(
  () => import('../../../components/JobList'),
  {loading: () => <Loading/>,ssr: false}
)

const Jobs = ({data}) => {
  const dispatch = useDispatch();
  useEffect(() =>{
    //dispatch addAllJobs actions for store data in redux-store
    dispatch(addAllJobs(data))
  },[])
  return (
    <div className="main-job-container">
      <Head>
          <title>Job-Listing -Jobs</title>
      </Head>
      <FilterJobs/>
      <section className="job-container">
        <h2 style={{marginBottom: "20px", color: "#333", fontSize: "20px"}}>Developer Jobs</h2>
        <JobList/>
      </section>
    </div>
  );
};

export default Jobs;

export async function getServerSideProps() {
  //request payload for fetch data from zippia api
  const payloadRequest = {
    companySkills: true,
    dismissedListingHashes: ["data-scientist"],
    fetchJobDesc: true,
    jobTitle: "software developer",
    locations: ["los-angeles-ca"],
    numJobs: 20,
    previousListingHashes: ["frontend-developer"],
  };

  //fetch data from zippia api

  const response = await fetch("https://www.zippia.com/api/jobs/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payloadRequest),
  });
  
  const data = await response.json();

  //return props 
  return {
      props: {data}
  }
}
