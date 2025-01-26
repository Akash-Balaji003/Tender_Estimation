// src/components/CommonDetailsContent.jsx

import React, { useEffect, useState } from "react";

const CommonDetailsContent = ({ onSubmit, onCancel, disabled, Lable }) => {
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [formData, setFormData] = useState({
        location: "",
        area: 0,
    }); // Initial form state

    return (
        <main className="flex-1 bg-gray-50 p-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Corporate Module</h1>
            </div>

            <h2 className="text-xl font-semibold mt-6">Tender Details</h2>

            {/* Form */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Area"
                        value={formData.location}
                        onChange={setFormData}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Area In Sq. Ft</label>
                    <input
                        type="number"
                        name="area"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Area"
                        value={formData.area}
                        onChange={setFormData}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
                <button
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                >
                    Submit
                </button>
                <button className="bg-gray-300 text-black px-6 py-2 rounded" >
                    Cancel
                </button>
            </div>
        </main>
    );
};

export default CommonDetailsContent;
