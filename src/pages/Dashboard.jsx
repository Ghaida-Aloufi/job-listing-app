import NavBar from "../components/NavBar";
import CardJob from "../components/CardJob";
import FormJob from "../components/FormJob";
import jobsData from "../data/jobs.json";
import DetailsJob from "../components/DetailsJob";
import { useState } from "react";

function Dashboard() {
  const [jobs, setJobs] = useState(jobsData);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddJob = (newJob) => {
    setJobs([...jobs, {id: jobs.length + 1, ...newJob }]);
    setIsOpen(false);
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col m-5 sm:m-10 md:ml-15 md:mr-15 mb-7 h-[16vh] justify-between">
        <a
          onClick={() => setIsOpen(true)}
          href="#Form"
          className="btn w-35 sm:w-46 rounded-xl p-6 mt-4 mb-3 bg-blue-500  text-white font-semibold "
        >
          <span className="font-bold text-md">+</span> Add New Job
        </a>
        {isOpen && (
          <FormJob onAddJob={handleAddJob} onClose={() => setIsOpen(false)} />
        )}
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
      <div className="grid  grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-4 md:ml-15 md:mr-15 ml-5 mr-5 sm:ml-10 sm:mr-10 justify-around  ">
        {jobs.map((job) => (
          <CardJob job={job} />
        ))}
      </div>
      <div >
        {jobs.map((job) => (
          <DetailsJob  job={job} />
        ))}
      </div>

      <footer className="bg-sky-50 text-center font-semibold mt-10 p-5">© 2025 Ghaida Aloufi. All rights reserved.</footer>
   
    </>
  );
}

export default Dashboard;
