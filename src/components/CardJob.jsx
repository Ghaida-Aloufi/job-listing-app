import React from "react";

function CardJob() {
  return (
    <div className="card w-96 bg-base-100 card-xl shadow-sm">
      <div className="card-body">
        <h2 className="card-title">title</h2>
        <h2>company</h2>
        <h2>location</h2>
        <h2>salary</h2>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}
export default CardJob;
