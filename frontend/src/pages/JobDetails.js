import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://your-backend.onrender.com/api/jobs";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`${API}/${id}`)
      .then(res => setJob(res.data));
  }, [id]);

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>

      <a href={job.applyLink} target="_blank">
        <button className="apply-btn">Apply Now</button>
      </a>
    </div>
  );
}

export default JobDetails;