// src/components/LeftPanel.jsx

import React from "react";
import {useNavigate} from 'react-router-dom';


const LeftPanel = () => {

      const navigate = useNavigate();
  
    return (
        <aside className="bg-blue-900 text-white w-1/4 p-6">
            <h2 className="text-xl font-bold mb-1">Welcome</h2>
            <p className="text-lg mb-8">User</p>
            <nav className="space-y-4">
                <a className="block hover:underline" onClick={()=>navigate('/home')}>
                Home
                </a>
                <a className="block hover:underline" onClick={()=>navigate('/search')}>
                Vendors
                </a>
                <a className="block hover:underline" onClick={()=>navigate('/')}>
                Logout
                </a>
            </nav>
        </aside>
    );
};

export default LeftPanel;
