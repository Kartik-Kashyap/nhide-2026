import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import Timeline from './pages/Timeline';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="themes" element={<Themes />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;