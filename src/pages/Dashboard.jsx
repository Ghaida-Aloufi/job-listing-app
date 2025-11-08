import NavBar from "../components/NavBar";
import CardJob from "../components/CardJob";
import FormJob from "../components/FormJob";
import jobsData from "../data/jobs.json";
import { useState } from "react";

function Dashboard() {
  const [jobs, setJobs] = useState(jobsData);

  return (
    <>
      <NavBar />
      <div className="flex flex-col m-30 h-[16vh] justify-between">
        <a
          href="#my_modal_8"
          className="btn w-46 rounded-xl p-6 bg-blue-500  text-white font-semibold "
        >
          <span className="font-bold text-md">+</span> Add New Job
        </a>

        <FormJob />

        <label className="input w-full rounded-xl h-12 ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" placeholder="Search by job title.." />
        </label>
      </div>
      <div className="flex flex-wrap  ml-30 mr-30 justify-around gap-5 ">
        {jobs.map((job) => (
          <CardJob job={job} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
