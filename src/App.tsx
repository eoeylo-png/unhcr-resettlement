import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResettlementPage from './pages/ResettlementPage';
import PDFViewerPage from './pages/PDFViewerPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import WhereWeWorkPage from './pages/WhereWeWorkPage';
import EmergenciesPage from './pages/EmergenciesPage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import DonatePage from './pages/DonatePage';
import WatchOurStoryPage from './pages/WatchOurStoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/what-we-do/build-better-futures/solutions/resettlement" element={<ResettlementPage />} />
          <Route path="/where-we-work" element={<WhereWeWorkPage />} />
          <Route path="/emergencies" element={<EmergenciesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/watch-our-story" element={<WatchOurStoryPage />} />
          <Route path="/pdf-viewer" element={<PDFViewerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;