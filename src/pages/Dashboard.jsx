import NavBar from "../components/NavBar";
import CardJob from "../components/CardJob";
function Dashboard() {
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

        <div className="modal" role="dialog" id="my_modal_8">
          <div className="modal-box h-[70%] p-12 flex flex-col gap-3">
            <h3 className="text-lg font-bold">Add New Job</h3>
            <fieldset className="fieldset">
              <label className="font-bold text-md">Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="font-bold text-md">Company</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="font-bold text-md">Location</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="font-bold text-md">Salary</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>

            <div className="modal-action">
              <a href="#" className="btn">
                Submit
              </a>
              <a href="#" className="btn">
                Cancel
              </a>
            </div>
          </div>
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
          <input type="search" placeholder="Search by job title.." />
        </label>
      </div>

      <CardJob />
    </>
  );
}

export default Dashboard;
