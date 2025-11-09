import React from "react";
import { useState } from "react";

function FormJob({ onAddJob }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddJob(form);
    setForm({ title: "", company: "", location: "", salary: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="modal" role="dialog" id="Form">
        <div className="modal-box h-[55%] sm:h-[70%] p-6 sm:p-12 flex flex-col gap-3">
          <h3 className="text-lg font-bold">Add New Job</h3>
          <fieldset className="fieldset">
            <label className="font-bold text-md">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold text-md">Company</label>
            <input
              type="text"
              className="input w-full"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold text-md">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="font-bold text-md">Salary</label>
            <input
              type="text"
              className="input w-full"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              placeholder="Type here"
            />
          </fieldset>

          <div className="modal-action">
            <button type="submit" className="btn">
              Submit
            </button>
            <a href="#" className="btn">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
export default FormJob;
