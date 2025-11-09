import React from "react";
function DetailsJob({ job }) {
  return (
    <div>
      <div className="modal" role="dialog" id={`Details${job.id}`}>
        <div className="modal-box h-[70%] p-12 flex flex-col gap-3">
          <h3 className="text-lg font-bold">{job.title}</h3>
          <h2>Company: {job.company}</h2>
          <h2>Location: {job.location}</h2>
          <h2>Salary: {job.salary}</h2>

          <div className="modal-action">
            <a href="#" className="btn">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsJob;
