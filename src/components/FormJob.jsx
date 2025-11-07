import React from 'react'

 function FormJob() {
  return (
    <div>
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

      
    </div>
  )
}
export default FormJob