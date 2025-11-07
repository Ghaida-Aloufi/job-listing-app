import NavBar from "../components/NavBar";
function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="relative ">
        <div className="btn btn-ghost bg-blue-500 rounded-2xl flex  justify-around items-center absolute right-0 top-20 mr-20 w-40 h-15 ">
          <span className="font-bold lg:text-2xl text-white">+</span>
          <h1 className="text-white font-semibold ">Add New Job</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
