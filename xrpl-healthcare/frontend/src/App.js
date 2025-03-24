import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import ViewRecords from './pages/ViewRecords';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/upload">Upload Data</Link></li>
                        <li><Link to="/view-records">View Records</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/view-records" element={<ViewRecords />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
