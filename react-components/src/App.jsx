import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyPage from './CompanyPage';
import TermsPage from './TermsPage';
import PrivacyPage from './PrivacyPage';
import RefundPage from './RefundPage';
import CancellationPage from './CancellationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/refund" element={<RefundPage />} />
                <Route path="/cancellation" element={<CancellationPage />} />
            </Routes>
        </Router>
    );
}

export default App;
