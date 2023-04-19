// @ts-nocheck

"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { auth } from "../../src/Firebase";
import auth from "@/Firebase";
const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState();
  console.log("🚀 ~ file: page.tsx:10 ~ SignUp ~ email:", email)
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [error, setError] = useState();
  const signUp = (e) => {
    e.preventDefault();
    if(password !== confirmedPassword) {
      setError('Passwords do not match!')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center py-5 ">
      <div className="max-w-lg w-2/3 sm:h-1/2">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-4xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={signUp}>
            <h2 className="text-2xl  flex justify-center font-semibold text-black-900 dark:text-white  ">
              Create an account
            </h2>
            <div>
              <label
                for="email"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Enter Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Enter Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Confirm Your Password
              </label>
              <input
                type="password"
                name="Confirmed password"
                id="Confirmed password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
              {error && <p className="text-red-600">{error}</p>}
            </div>

            <button 
              type="submit"
              className="w-full text-white bg-slate-600 hover:bg-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
