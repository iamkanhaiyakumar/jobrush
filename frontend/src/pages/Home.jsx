import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/jobs";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    axios.get(API, { params: filters }).then((res) => setJobs(res.data));
  }, [filters]);

  return (
    <>
      {/* HEADER */}
      <div className="header">⚡ JobRush</div>

      {/* SEARCH */}
      <div className="search-bar">
        <input
          placeholder="Search jobs..."
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />

        <input
          placeholder="Location"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />

        <select
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All</option>
          <option value="govt">Govt</option>
          <option value="private">Private</option>
        </select>
      </div>

      {/* JOB LIST */}
      <div className="container">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <div className="job-title">{job.title}</div>

            <div className="job-info">
              {job.company} • {job.location}
            </div>

            <div className="job-tag">{job.category?.toUpperCase()}</div>

            <br />

            <a href={`/job/${job._id}`} className="apply-btn">
              View Details
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
