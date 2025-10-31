import React from 'react';
import Home from './components/Home';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Faq from './components/Faq'
import ContactForm from './components/ContactForm';
import FloatingChatIcon from './components/FloatingChatIcon';
import Nav from './components/Nav'; // Import the Nav component
import ChatBotAbout from './components/ChatBotAbout';
import FeedbaackPage from './components/FeedbackPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav /> {/* Add Nav component */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/feedback' element={<FeedbaackPage/>} />
          <Route path='/chatbotabout' element={<ChatBotAbout/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <FloatingChatIcon /> {/* Add FloatingChatIcon component */}
      </BrowserRouter>
    </div>
  );
}

export default App;
