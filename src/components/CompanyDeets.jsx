import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EmployeePage = ({ onCancel, companyData }) => {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    const [formData, setFormData] = useState({
        Emp_name: "",
        Emp_title: "",
        Emp_designation: "",
        Emp_qualification: "",
        Emp_phone: "",
        Emp_email: "",
        Emp_profile_id: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <main className="flex-1 bg-gray-50 p-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Corporate Module</h1>
            </div>

            <h2 className="text-xl font-semibold mt-6">Employee Details</h2>

            {/* Form */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-gray-700">Company Name</label>
                    <input
                        type="text"
                        name="Emp_name"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Employee Name"
                        value={companyData.Company_Name}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Customer Rating</label>
                    <input
                        type="text"
                        name="Emp_title"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Profile Title"
                        value={companyData.Avg_Customer_Rating}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Company Projects</label>
                    <input
                        type="text"
                        name="Emp_designation"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Employee Designation"
                        value={companyData.Projects_Completed}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Company Experience</label>
                    <input
                        type="text"
                        name="Emp_qualification"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Employee Qualification"
                        value={companyData.Years_in_Operation}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Disputes Resolved Percentage</label>
                    <input
                        type="text"
                        name="Emp_phone"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Phone Number"
                        value={companyData.Disputes_Resolved}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-gray-700">Company Expected Profit Margin</label>
                    <input
                        type="text"
                        name="Emp_email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Employee Email"
                        value={companyData.Profit_Margin}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
                <button className="bg-gray-300 text-black px-6 py-2 rounded" onClick={onCancel}>
                    Go Back
                </button>
            </div>
        </main>
    );
};

export default EmployeePage;
