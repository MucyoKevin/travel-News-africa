// @ts-nocheck

"use client";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider, facebook } from "../../src/Firebase";
const LoginCard = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [value, setValue] = useState("");
  const [user, setUser] = useState();

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/signup");
  };
  const signIn = (e) => {
    console.log("iiiiii");
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          router.push("/");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const googleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      router.push("/");
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  const facebookClick = () => {
    signInWithPopup(auth, facebook)
      .then((result) => {
        setUser(result.user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-lg w-2/3 sm:h-1/2 sm:w-full">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-4xl p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#" onSubmit={signIn}>
          <h2 className="text-2xl  flex justify-center font-semibold text-black-900 dark:text-white  ">
            Log in or create an account
          </h2>
          <div>
            <label
              for="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
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
              Your password
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
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label
                  for="remember"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-slate-600 hover:bg-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          {/* other providers */}
          <div className="flex flex-nowrap justify-between">
            {" "}
            <span className="block border border-solid border-gray-600 my-2 w-52"></span>
            <p>Or</p>{" "}
            <span className="block border border-solid border-gray-600 my-2 w-52 "></span>
          </div>
          <div className="flex flex-row justify-around sm:justify-between ">
            <button
              onClick={googleClick}
              className=" border rounded p-1 sm:p-2 flex flex-row justify-between"
            >
              {" "}
              <FaGoogle className="m-2" />
              Sign In <span className=" pl-1 font-bold hidden sm:block">with Goggle</span>
            </button>

            <button
              onClick={facebookClick}
              className=" border rounded py-2 px-1 flex flex-row justify-between"
            >
              {" "}
              <FaFacebook className="m-2" />
              Sign In <span className="pl-1 font-bold hidden sm:block">with Facebook</span>
            </button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              onClick={handleClick}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
            {error && <p className="text-red-700">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
