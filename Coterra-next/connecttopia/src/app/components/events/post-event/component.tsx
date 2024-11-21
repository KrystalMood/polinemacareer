import React, { useState } from "react";

export default function PostEventForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    eventTitle: "",
    location: "",
    budget: "",
    startDate: "",
    endDate: "",
    description: "",
    files: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Event posted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */} 
        <br /><br />
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#0d5c91]">Post an Event</h1>
          <p className="text-gray-600">
            Fill out the form below to share your job fair event with the community.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          {/* Company & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Contact Name
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter contact name"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                name="eventTitle"
                value={formData.eventTitle}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter event title"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Dates & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Budget</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-md p-2"
                placeholder="Enter budget"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
              rows={5}
              placeholder="Describe the event briefly..."
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-medium text-gray-700">
              Upload Supporting Files (optional)
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Terms & Submit */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="h-4 w-4" required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the terms and conditions.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0d5c91] text-white py-2 rounded-md font-medium hover:bg-[#09476e] transition"
          >
            Post Event
          </button>
        </form>
      </div>
    </div>
  );
}
