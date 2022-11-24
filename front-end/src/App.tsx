import { FC, useEffect } from 'react';

import appStyle from './App.module.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Education from './components/education/Education';
import Work from './components/work/Work';
import ContactMe from './components/contactme/ContactMe';
import VisitorCounter from './components/visitorCounter/VisitorCounter';

import { incVisitorCounter } from './components/visitorCounter/extra';

const App: FC = () => {
  useEffect(() => {
    incVisitorCounter();
  }, []);

  return (
    <div className={appStyle.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/visitor-counter" element={<VisitorCounter />} />
      </Routes>
    </div>
  );
};

export default App;
