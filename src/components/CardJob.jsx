import React from "react";

function CardJob({ job }) {
  return (
    <div className="card flex w-full bg-gray-100 card-xl shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{job.title}</h2>
        <h2>Company: {job.company}</h2>
        <h2>Location: {job.location}</h2>
        <h2>Salary: {job.salary}</h2>

        <div className="justify-end card-actions">
          <a href={`#Details${job.id}`}  className="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  );
}

export default CardJob;
