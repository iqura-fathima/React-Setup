import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useQueryClient } from "react-query";
import {  useAppStore } from "./store";
import "./index.css";

function Form() {
  const queryClient = useQueryClient();
  const store= useAppStore();
  const {addItem} = store;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      store.addItem(values);
      console.log(store.items)
      queryClient.invalidateQueries("items");
      formik.resetForm();
    },
  });
  useEffect(()=>{
    console.log(store.items);
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4 align-middle flex items-center">
        <label htmlFor="name" className="block mr-4 font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="p-2 border rounded"
        />
      </div>

      <div className="mb-4 align-middle flex items-center">
        <label htmlFor="email" className="block mr-4 font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
