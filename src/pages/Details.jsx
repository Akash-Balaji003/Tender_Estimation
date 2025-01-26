// src/pages/CommonDetails.jsx

import React, { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel"; // Import your existing Left Panel
import EmployeePage from "../components/CompanyDeets"; // Import the CommonDetailsContent
import {useNavigate, useLocation} from 'react-router-dom';


const CommonDetails = () => {
    const navigate = useNavigate();
    const [basicData, setBasicData] = useState([]);

    const location = useLocation();
    const { company } = location.state || {}; // Extract the company object

    console.log("DATA : ", company.Disputes_Resolved_Percentage);

    const handleCancel = () => {
        console.log("Cancelling");
        navigate('/search')
    };
    return (
        <div className="flex h-screen">
        {/* Left Panel */}
        <LeftPanel />

        {/* Main Content */}
        <EmployeePage onCancel={handleCancel} companyData={company} />
        </div>
    );
};

export default CommonDetails;
