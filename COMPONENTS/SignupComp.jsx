import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignupComp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  function getData(e) {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
    console.log({ ...data, [name]: value });
  }

  async function submitSignUp(e) {
    e.preventDefault();
    console.log("Submit SignUp was clicked");
    try {
      const response = await axios.post("http://localhost:5000/sign-up", data);
      console.log(response.data);
      navigate("/");
      toast.success("Signed Up successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <>
      <div className="wrapper min-h-screen flex justify-center items-center">
        <form className="contain flex flex-col gap-6" onSubmit={submitSignUp}>
          <p className="text-2xl font-bold text-center">Register An Account!</p>

          <div className="flex flex-col gap-2">
            <p className="font-medium">Enter Full Name:</p>
            <input
              type="text"
              name="fullname"
              id=""
              placeholder="eg: John Doe"
              className="border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none"
              value={data.fullname}
              onChange={getData}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Enter Email:</p>
            <input
              type="text"
              name="email"
              id=""
              placeholder="eg: johndoe@gmail.com"
              className="border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none"
              value={data.email}
              onChange={getData}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Enter Username:</p>
            <input
              type="text"
              name="username"
              id=""
              placeholder="eg: johndoe_1"
              className="border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none"
              value={data.username}
              onChange={getData}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium">Enter Password:</p>
            <input
              type="password"
              name="password"
              id=""
              placeholder="********"
              className="border-1 border-gray-200 py-2 px-2 w-[320px] rounded-md focus:outline-none"
              value={data.password}
              onChange={getData}
            />
          </div>

          <button
            type="submit"
            className="w-[320px] bg-gray-600 text-white font-bold py-2 rounded-md hover:bg-gray-700 cursor-pointer"
          >
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <span className="italic underline">
              <Link to={"/"}>Log In</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignupComp;
