// @ts-nocheck

function MyApp() {
  return (
      <div className="flex justify-center py-2">
          <div className=" top-40 bg-white shadow rounded py-2 lg:px-28 px-8 w-1/2 ">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Contact Us
            </p>
            <div className="sm:flex items-center mt-4">
              <div className="sm:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Full Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-black focus:oultine-none p-1  mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-black p-1  mt-4 bg-gray-100  rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
          
            <div>
              <div className="w-full flex flex-col mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-blackp-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center w-full mb-3">
              <button type="submit" className="mt-4 text-xs font-semibold leading-none text-white py-3 px-6 bg-slate-700 rounded hover:bg-slate-900  ">
                Submit
              </button>
            </div>
          </div>
      </div>
  );
}

export default MyApp;