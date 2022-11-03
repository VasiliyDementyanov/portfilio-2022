import { FC } from 'react';

import appStyle from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Education from './components/education/Education';

const App: FC = () => {
  return (
    <div className={appStyle.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
};

export default App;
