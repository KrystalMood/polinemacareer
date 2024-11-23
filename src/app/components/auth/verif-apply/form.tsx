import React, { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function JobApplicationVerification() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  const handleSubmit = () => {
    if (isChecked) {
      router.push("/confirmation"); // Ganti dengan halaman tujuan setelah apply
    } else {
      alert("Please confirm your application.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/** Back Arrow */}
      <div className="absolute top-4 left-4 text-gray-800 transition-all duration-300 hover:scale-110">
        <Link href={"/"}>
          <RiArrowGoBackFill size={26} />
        </Link>
      </div>
      
      <div className="w-full h-full mx-auto space-y-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-800">Job Application</h1>
        <p className="text-gray-600 font-light max-w-xl text-center">
          Are you sure you want to apply for this position? Please make sure all your details are correct before submitting.
        </p>

        {/** Confirmation Form */}
        <form className="space-y-8 w-2/5">
          {/* Job Title and Company Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Job Information</h2>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-sm font-semibold text-gray-600">Position</p>
                <p className="text-gray-800">Software Engineer</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm font-semibold text-gray-600">Company</p>
                <p className="text-gray-800">Tech Corp</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-600">Location</p>
              <p className="text-gray-800">New York</p>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="confirm-application"
              className="h-5 w-5 text-blue-500 border-gray-300 rounded"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="confirm-application"
              className="text-sm text-gray-700 font-medium"
            >
              I confirm that the information provided is correct and I would like to apply for this job.
            </label>
          </div>

          {/** Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg disabled:bg-gray-400"
            disabled={!isChecked} // Disable button if checkbox is not checked
          >
            Confirm and Apply
          </button>
        </form>
      </div>
    </div>
  );
}
