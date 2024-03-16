// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    function verifyPassword() {
        var pw = document.getElementById("pswd1").value;
        var pw2 = document.getElementById("pswd2").value;
        //check empty password field  
        if (pw === "") {
            alert("**Fill the password please!");
            return false;
        }
        if (pw != pw2) {
            alert("**Password is wrong");
            return false;
        }
        //minimum password length validation  
        if (pw.length < 8) {
            alert("**Password length must be atleast 8 characters");
            return false;
        }

        //maximum length of password validation  
        if (pw.length > 15) {
            alert("**Password length must not exceed 15 characters");
            return false;
        }
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">

            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl hover:shadow-orange-300 ring-2 ring-[#00df9a] lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#00df9a]">
                    Sign Up
                </h1>
                <form className="mt-6" onsubmit="verifyPassword()">
                    <div className="mb-2">
                        <label
                            for="email"

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-[#00df9a] bg-white border rounded-md focus:border-[#00df9a] focus:ring-[#00df9a]focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="pswd1"
                            className="block w-full px-4 py-2 mt-2 text-[#00df9a] bg-white border rounded-md focus:border-[#00df9a] focus:ring-[#00df9a] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="pswd2"
                            className="block w-full px-4 py-2 mt-2 text-[#00df9a] bg-white border rounded-md focus:border-[#00df9a] focus:ring-[#00df9a] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#00df9a] rounded-md hover:bg-[#00df9a] focus:outline-none focus:bg-[#00df9a]">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account!!{" "}
                    <a
                        href="/signup"
                        className="font-medium text-[#00df9a] hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>

        </div>
    );
};

export default Register;
