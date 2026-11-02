/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { LifeStoriesPage } from './pages/LifeStoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { TravelWithMePage } from './pages/TravelWithMePage';
import { JourneyDetailPage } from './pages/JourneyDetailPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-[#F7F8FA] dark:bg-[#111318] text-[#171923] dark:text-[#F3F4F6] transition-colors duration-200">
            <Header />
            <main className="flex-1 w-full">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/life-stories" element={<LifeStoriesPage />} />
                <Route path="/life-stories/:slug" element={<StoryDetailPage />} />
                <Route path="/travel-with-me" element={<TravelWithMePage />} />
                <Route path="/travel-with-me/:slug" element={<JourneyDetailPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
