import NavBar from "../components/NavBar";
function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col m-30 h-[16vh] justify-between">
        <div className="btn btn-ghost bg-blue-500 rounded-2xl flex  justify-around items-center  mr-20 w-40 h-15 ">
          <span className="font-bold lg:text-2xl text-white">+</span>
          <h1 className="text-white font-semibold ">Add New Job</h1>
        </div>

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
          <input type="search" required placeholder="Search by job title.." />
        </label>
      </div>
    </>
  );
}

export default Dashboard;
