import './App.css';
import Header from './COMPONENT/Head/Header';
import Main from './COMPONENT/Pages/MainPage/MainPage';
import About from './COMPONENT/Pages/AbouPage/AboutPage';
import Skill from './COMPONENT/Pages/SkillPage/Skill';
import Project from './COMPONENT/Pages/ProjectPage/Project';
import Contact from './COMPONENT/Pages/ContactPage/ContactPage';
import GitHub from './COMPONENT/Pages/GitHubPages/GitHub';

import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <GitHub></GitHub>
      <Contact></Contact>
    </>
  );
}

export default App;
