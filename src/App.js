import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
// import building from './assets/building.jpg';
import Navbar from './components/UI/Navbar';
import ProjectDisplay from './components/ProjectDisplay/ProjectDisplay';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project_display' element={<ProjectDisplay />} />
      </Routes>
      {/* <div className="project-list">
        <Header />
        <ProjectGrid projects={projects} />
      </div> */}
    </div>
  );
}

export default App;
