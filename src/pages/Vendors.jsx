
import React from "react";
import LeftPanel from "../components/LeftPanel"; // Import your existing Left Panel
import EditEmp from "../components/Search"; // Import the CommonDetailsContent

const AnotherScreen = () => {
    
    return (
        <div className="flex h-screen">
            {/* Left Panel */}
            <LeftPanel />

            {/* Main Content */}
            <div className="flex-1 bg-white">
                <EditEmp navigateTo="/AdminEmp" />
            </div>
        </div>
    );
};

export default AnotherScreen;
