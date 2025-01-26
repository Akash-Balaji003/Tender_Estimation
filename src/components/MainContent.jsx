import React, { useEffect, useState } from "react";
import PieChartt from "../components/PieChart"; // Import the MainContent component

const MainContent = ({ onSubmit, onCancel }) => {
    const [basicData, setBasicData] = useState(null);
    const [formData, setFormData] = useState({
        location: "",
        area: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (location, area) => {
        console.log("Submit");
        try {
            fetch(`http://127.0.0.1:8000/get-budget?city=${location}&area=${area}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Basic Data:", data); 
                    setBasicData(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleCheck = () => {
        console.log(basicData)
    };

    return (
        <main className="flex-1 bg-gray-50 p-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Corporate Module</h1>
            </div>

            <h2 className="text-xl font-semibold mt-6">Tender Details</h2>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-gray-700">Location</label>
                    <select
                        name="location"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={formData.location}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select a city</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </div>


                <div>
                    <label className="block mb-2 text-gray-700">Area In Sq. Ft</label>
                    <input
                        type="number"
                        name="area"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Area"
                        value={formData.area}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
                <button
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                    onClick={() => handleSubmit(formData.location, formData.area)}
                >
                    Submit
                </button>
                <button
                    className="bg-gray-300 text-black px-6 py-2 rounded"
                    onClick={handleCheck}
                >
                    Cancel
                </button>
            </div>
            {/* Conditionally render the PieChartt component */}
            {basicData && (
                <div className="mt-8 self-center justify-center">
                    <div className="mt-8 self-center text-center mb-10">
                    <p className="text-xl text-gray-500">
                        Location: {basicData.Location}
                    </p>
                    <p className="text-xl text-gray-500">
                        Area: {basicData.Area} sq. ft.
                    </p>
                    <p className="text-xl text-gray-500">
                        Budget Range: ₹{new Intl.NumberFormat('en-IN').format(basicData.Low_Bid)} - ₹{new Intl.NumberFormat('en-IN').format(basicData.High_Bid)}
                    </p>

                    </div>
                    <PieChartt basicData={basicData} key={JSON.stringify(basicData)} />
                </div>
            )}
        </main>
    );
};

export default MainContent;
