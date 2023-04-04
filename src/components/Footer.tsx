import styles from "./page.module.css";
import "tailwindcss/tailwind.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto">
      <div className=" h-1/2 w-full flex md:flex-row flex-col justify-between items-start">
        <div className="p-3">
          <ul>
            <h1 className="text-gray-800 font-serif text-2xl pb-6 text-center">
              Travel News <span className="font-bold">Africa </span>
            </h1>
            <div className="flex gsp-6 pb-5 [&>*]:mx-1">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-yellow-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Sports</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Football</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Basketball</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Rugby</h5>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Business</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Companies</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Finance & Market</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Enterprise</h5>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Life & Style
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Culture</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Arts & books</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Travel</h5>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Health</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Healthy Nation</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Covid-19</h5>
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/">
                {" "}
                <h5>Emergency contacts</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-20 text-center pb-5">
        <h1 className="text-gray-800 font-semibold">
          © 2021-2023 All rights reserved |{" "}
          <span className="hover:text-blue-600 cursor-pointer">
            Travel Nation Africa
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default footer;
