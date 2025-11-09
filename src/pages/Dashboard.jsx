import NavBar from "../components/NavBar";
import CardJob from "../components/CardJob";
import FormJob from "../components/FormJob";
import jobsData from "../data/jobs.json";
import DetailsJob from "../components/DetailsJob";
import { useState } from "react";

function Dashboard() {
  const [jobs, setJobs] = useState(jobsData);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [location, setLocation] = useState("");

  const handleAddJob = (newJob) => {
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setIsOpen(false);
  };
  return (
    <>
      <NavBar />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between border-b-2 border-gray-200 h-auto md:h-[75vh] p-6 md:p-12 lg:p-20 gap-10">
        <div className=" rounded-b-[5vh] flex flex-col justify-center items-center ">
          <h1 className="font-bold lg:text-5xl text-center text-2xl text-[#3389c2]">
            Find Your Dream Job Today..
          </h1>
          <h2 className="text-center p-5 text-md font-bold">
            Explore thousands of opportunities that match your skills and
            passion.
          </h2>
          <label className="input w-[60%] mt-6 rounded-xl h-12  border-[#3389c2]">
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
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title.."
            />
          </label>
        </div>
        <img
          src="../src/assets/img.jpg"
          className="w-[85%] sm:w-[60%] md:w-[45%] lg:w-[40%] rounded-2xl object-cover"
        />
      </div>
      <div className="flex  m-5 sm:m-10 md:ml-15 md:mr-15  justify-between ">
        <a
          onClick={() => setIsOpen(true)}
          href="#Form"
          className="btn w-35 sm:w-46 rounded-xl p-6 bg-[#3389c2]  text-white font-semibold "
        >
          <span className="font-bold text-md">+</span> Add New Job
        </a>

        {isOpen && (
          <FormJob onAddJob={handleAddJob} onClose={() => setIsOpen(false)} />
        )}
      </div>

      <div className="flex flex-col border-gray-200 rounded-md mb-7 border-2 m-5 sm:m-10 md:m-15  p-7 lg:ml-15 lg:mr-15">
        <h1 className="font-bold text-2xl mb-3">Filter</h1>
        <div className="flex flex-col lg:flex-row justify-around  ">
          <div className="flex flex-col gap-2 w-full">
            <h2>Min Salary</h2>
            <label className="input  rounded-xl h-12  border-[#3389c2]">
              <input
                type="number"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
                placeholder="Min Salary"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h2>Max Salary</h2>
            <label className="input  rounded-xl h-12  border-[#3389c2]">
              <input
                type="number"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
                placeholder="Max Salary"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h2>Location</h2>
            <label className="input   rounded-xl h-12  border-[#3389c2]">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-6 md:ml-15 md:mr-15 ml-5 mr-5 sm:ml-10 sm:mr-10 justify-around  ">
        {jobs
          .filter(
            (job) =>
              job.title.toLowerCase().includes(search.toLowerCase()) &&
              (minSalary === "" || job.salary >= minSalary) &&
              (maxSalary === "" || job.salary <= maxSalary) &&
              (location === "" ||
                job.location.toLowerCase().includes(location.toLowerCase()))
          )
          .map((job) => (
            <CardJob job={job} />
          ))}
      </div>
      <div>
        {jobs.map((job) => (
          <DetailsJob job={job} />
        ))}
      </div>

      <footer className="bg-sky-50 text-center font-semibold mt-20 p-5">
        © 2025 Ghaida Aloufi. All rights reserved.
      </footer>
    </>
  );
}

export default Dashboard;
