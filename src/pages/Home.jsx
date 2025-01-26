import React from "react";
import LeftPanel from "../components/LeftPanel"; // Import the LeftPanel component
import MainContent from "../components/MainContent"; // Import the MainContent component

const AdminAddUsers = () => {    
    
    console.log("Component is rendering");

    return (
        <div className="flex h-screen">
            {/* Left Panel */}
            <LeftPanel /> {/* Use the LeftPanel component */}

            {/* Main Content with custom button label */}
            <MainContent />
        </div>
    );
};

export default AdminAddUsers;
