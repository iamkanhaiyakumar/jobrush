import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/jobs";

function Admin() {
  const [job, setJob] = useState({});

  const addJob = async () => {
    const pass = prompt("Enter Admin Password");

    await axios.post(API, {
      ...job,
      adminPass: pass
    });

    alert("Job Added");
  };

  return (
    <div className="container">
      <h2>Add Job</h2>

      <input placeholder="Title" onChange={e => setJob({...job, title: e.target.value})}/>
      <input placeholder="Company" onChange={e => setJob({...job, company: e.target.value})}/>
      <input placeholder="Location" onChange={e => setJob({...job, location: e.target.value})}/>
      <input placeholder="Description" onChange={e => setJob({...job, description: e.target.value})}/>
      <input placeholder="Apply Link" onChange={e => setJob({...job, applyLink: e.target.value})}/>

      <br /><br />
      <button onClick={addJob}>Add Job</button>
    </div>
  );
}

export default Admin;