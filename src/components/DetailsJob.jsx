import React from "react";
function DetailsJob({ job }) {
  return (
    <div>
      <div className="modal" role="dialog" id={`Details${job.id}`}>
        <div className="modal-box h-[70%] p-12 flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="flex flex-col ">
              <h1 className="text-gray-400 text-sm ">posted Date</h1>
              <h2 className="text-gray-400 text-sm "> {job.postedDate}</h2>
            </div>
          </div>
          <h2 className="font-bold">Company</h2>
          <h3> {job.company}</h3>
          <h2 className="font-bold">Description</h2>
          <h3>{job.description}</h3>
          <h2 className="font-bold">experience</h2>
          <h3>{job.experience}</h3>
          <h1 className="font-bold ">Closing Date</h1>
          <h3>{job.closingDate}</h3>
          <div className="flex justify-around w-65 ">
            <h2 className="border w-fit p-2 rounded-md">{job.jobType}</h2>
            <div className="border w-fit p-2 flex rounded-md">
                 <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="26"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
              <h2 >
                {job.location}
              </h2>
            </div>

            <h2 className="border w-fit p-2 rounded-md">{job.salary}$</h2>
          </div>

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
