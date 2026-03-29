import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const API = "https://your-backend.onrender.com/api/jobs";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: ""
  });

  useEffect(() => {
    axios.get(API, { params: filters })
      .then(res => setJobs(res.data));
  }, [filters]);

  return (
    <>
      <Helmet>
        <title>JobRush - Latest Jobs</title>
      </Helmet>

      <div className="header">
        <h1>⚡ JobRush</h1>
      </div>

      <div className="search-bar">
        <input placeholder="Search"
          onChange={e => setFilters({...filters, search: e.target.value})} />

        <input placeholder="Location"
          onChange={e => setFilters({...filters, location: e.target.value})} />

        <select onChange={e => setFilters({...filters, category: e.target.value})}>
          <option value="">All</option>
          <option value="govt">Govt</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="container">
        {jobs.map(job => (
          <div className="job-card" key={job._id}>
            <div className="job-title">{job.title}</div>
            <p>{job.company} • {job.location}</p>
            <a href={`/job/${job._id}`} className="apply-btn">View</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;