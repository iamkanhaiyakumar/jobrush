import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/jobs";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`${API}/${id}`).then(res => setJob(res.data));
  }, [id]);

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p><b>{job.company}</b></p>
      <p>{job.location}</p>
      <p>{job.description}</p>

      <a href={job.applyLink} target="_blank" className="apply-btn">
        Apply Now
      </a>
    </div>
  );
}

export default JobDetails;