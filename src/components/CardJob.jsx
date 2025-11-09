import React from "react";

function CardJob({ job }) {
  return (
    <div className="card flex w-full  bg-linear-60 hover:bg-blue-50 card-xl shadow-lg border border-gray-300">
      <div className="card-body ">
        <h2 className="card-title">{job.title}</h2>
        <h3>{job.company}</h3>
        <div className=" flex gap-2">
           <div className="flex  w-fit border  border-gray-400 justify-center items-center  pl-1 pr-1  ">
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

          <h3>{job.location}</h3>
        </div>
        <div className="flex  w-fit border  border-gray-400 justify-center items-center  pl-1 pr-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z" />
          </svg>
          <h3>{job.salary}<span>$</span></h3>
        </div>
        </div>
       
        <div className="justify-start card-actions mt-3">
          <a href={`#Details${job.id}`} className="btn btn-primary bg-[#3389c2] border-gray-500  w-[40%]">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardJob;
