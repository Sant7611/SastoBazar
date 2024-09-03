import React from "react";
import { NavLink } from "react-router-dom";
export const Register = () => {
  return (
    <>
      <div className="rounded-md bg-gray-100 p-4 mx-auto w-1/2">
        <h2 className="font-medium">Register</h2>
        <span className="text-base">Please enter your credentials</span>
        <form className="my-3 ">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ConfirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="ConfirmPassword"
              id="ConfirmPassword"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full outline-none"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-3 mb-2 px-4 w-full bg-purple-600 text-white rounded-md hover:bg-purple-700  outline-none"
            >
              Login
            </button>
          </div>
          <span>
            Already have an account?{" "}
            <NavLink
              to="/sastobazar-login"
              className="text-decoration-none text-purple-600 hover:text-purple-700"
            >
              {" "}
              Login
            </NavLink>
          </span>
        </form>
      </div>
    </>
  );
};
