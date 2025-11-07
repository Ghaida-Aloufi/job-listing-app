import React from "react";
import jobs from "../data/jobs.json"

function CardJob() {
  return (
  
  
  <div className="flex flex-wrap ml-30 mr-30 justify-around gap-5"> 
      {jobs.map((e)=>
  
       <div className="card flex w-96 bg-gray-100 card-xl shadow-sm">
      <div className="card-body">
       
        
        <h2 className="card-title">{e.title}</h2>
        <h2>Company: {e.company}</h2>
        <h2>Location: {e.location}</h2>
        <h2>Salary: {e.salary}</h2>
       
        

        <div className="justify-end card-actions">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
      </div>
   )} 
</div>
   
  );
}
 
export default CardJob;
