import React, { useState } from "react";


const FilterJobs = () => {
  const [search, setSearch] = useState("");
  const [jobFilter, setJobFilter] = useState("all");

  const handleSearch = (e) => {
    //set search value
    setSearch(e.target.value);
    //access all job-card
    const alljobs = document.querySelectorAll(".job-card");

    //lopping threw all jobs and check job title match to search input value
    for (let i = 0; i < alljobs.length; i++) {
      //getting job card title
      const jobTitle =
        alljobs[
          i
        ].children[1].children[0].children[0].textContent.toLowerCase();

      //check job title not match then don't show this job
      if (!jobTitle.includes(search.toLowerCase())) {
        alljobs[i].style.display = "none";
      } else {
        alljobs[i].style.display = "block";
      }
    }
  };

  const handleSelect = (e) => {
    setJobFilter(e.target.value);

    //access all job-card
    const alljobs = document.querySelectorAll(".job-card");
    for (let i = 0; i < alljobs.length; i++) {
      //getting job card post date
      const jobPostDate =
        alljobs[i].children[1].children[3].children[1].children[1]?.textContent.split("d")[0] ||
        alljobs[i].children[1].children[3].children[1].children[0].textContent.split("d")[0];
      
      //check job post last 7 day
      if (e.target.value === "7-day") {
        if (jobPostDate > 7) {
          alljobs[i].style.display = "none";
        } else {
          alljobs[i].style.display = "block";
        }
      } else {
        alljobs[i].style.display = "block";
      }
    }
  };

  return (
    <div className="filterjobs-container">
      {/* jobs filter by jobs name using input */}
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="Search by Name"
        className="search-input"
      />

      {/* jobs filter by select options */}
      <select
        name="job-filter"
        id="job-filter"
        onChange={handleSelect}
        value={jobFilter}
        className="SelectFilter"
      >
        <option value="all">All</option>
        <option value="7-day">last Seven day</option>
      </select>
    </div>
  );
};

export default FilterJobs;


