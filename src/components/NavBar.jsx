import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-sky-50 shadow-sm">          

        <div className="flex-1">
          <a className="btn btn-ghost "><img className="w-30" src="../src/assets/logo.svg" alt="" /></a>
        </div>

        <div className="flex w-27 justify-around items-center ">
                  <div>
          <h1>Ghaida</h1> 
        </div>      
        <div className="flex-none">
             <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" bg-gray-300 border-2 rounded-full">
                 <img
                  alt="Tailwind CSS Navbar component"
                  src="../src/assets/avatar.png"
                />        
              </div>
              
           </div>   
        </div>
        </div>


      </div>
    </div>
  );
}
export default NavBar;
