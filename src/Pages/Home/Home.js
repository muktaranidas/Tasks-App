import React from "react";

const Home = () => {
  return (
    <section className="p-6 mx-32 dark:bg-gray-800 dark:text-gray-50">
      <form
        novalidate=""
        action=""
        className="container flex flex-col   mt-10 p-16   border-4 w-1/2 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="w-1/2 rounded-md my-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Date
            </span>
            <input
              type="date"
              name="task"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-full"
              placeholder=" Add Your Task"
            />
          </label>
        </fieldset>
        <fieldset className="w-1/2 rounded-md my-6">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Add Task
            </span>
            <input
              type="text"
              name="task"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-full"
              placeholder=" Add Your Task"
            />
          </label>
        </fieldset>
        <fieldset className="w-1/2 rounded-md my-6">
          <label for="files" className="block text-sm font-medium">
            Attachments
          </label>
          <div className="flex">
            <input
              type="file"
              name="files"
              id="files"
              className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Home;
