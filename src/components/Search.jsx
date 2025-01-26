import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const MainContent = ({ }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [basicData, setBasicData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm.length >= 3) {
            setIsLoading(true);
            // Replace with your API URL
            fetch(`http://127.0.0.1:8000/search-company?search_query=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Basic Data : ", data.Result); // Access the 'Result' key
                    setFilteredData(data.Result); // Assuming the API returns an array of employees
                })
                .catch((error) => console.error("Error fetching data:", error))
                .finally(() => setIsLoading(false));
        } else {
            setFilteredData([]);
        }
    }, [searchTerm]);

    useEffect(() => {
        try {
            fetch(`http://127.0.0.1:8000/companies`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Basic Data : ", data.Result); // Access the 'Result' key
                    setBasicData(data.Result); // Assuming the API returns an array of companies under 'Result'
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);    

    const handleUserClick = (common_name, profile_id) => {
        // Clear search query and results
        setSearchTerm("");
        setFilteredData([]);
    
    };

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Corporate Module</h1>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for Vendors..."
                    className="border rounded-md w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Search Results Overlay */}
            {searchTerm.length >= 3 && (
                <div className="p-4 border rounded-md shadow-sm hover:shadow-md space-y-4 mb-10 h-75 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">Results</h2>
                    {isLoading ? (
                        <p className="text-gray-500 p-4">Loading...</p>
                    ) : filteredData.length > 0 ? (
                        filteredData.map((employee) => (
                            <div
                                key={employee.Company_ID}
                                className="p-4 border rounded-md shadow-sm hover:shadow-md "
                                onClick={() => handleUserClick(employee.Company_Name, employee.profile_id)}
                            >
                                <h2 className="text-lg font-semibold">{employee.Company_Name}</h2>
                                <p className="text-sm text-gray-500">
                                    {employee.Years_in_Operation} years of experience
                                </p>
                                <p className="text-sm text-gray-500">
                                    Credibility: {employee.Trustable_Score}%
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 p-4">No employees found.</p>
                    )}
                </div>
            )}

            {/* Basic Data Section */}
            <div>
                <h2 className="text-xl font-bold mb-4">All Vendors</h2>
                <div className={`space-y-4 overflow-y-auto ${ searchTerm.length >= 3 ? "h-105" : "h-192"}`}>
                    {basicData.length > 0 ? (
                        basicData.map((company) => (
                            <div
                                key={company.Company_ID}
                                className="p-4 border rounded-md shadow-sm hover:shadow-md"
                            >
                                <h2 className="text-lg font-semibold">{company.Company_Name}</h2>
                                <p className="text-sm text-gray-500">
                                    {company.Years_in_Operation} years of experience
                                </p>
                                <p className="text-sm text-gray-500">
                                    Credibility: {company.Trustable_Score}%
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No vendors available.</p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default MainContent;
