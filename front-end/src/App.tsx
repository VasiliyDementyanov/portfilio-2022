import { FC } from 'react';

import appStyle from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';

const App: FC = () => {
  return (
    <div className={appStyle.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default App;
