import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layouts/Layout'
import Main from 'pages/Main';
import Intro from 'pages/Intro';
import Experience from 'pages/Experience';
import AboutMe from 'pages/About';
import Outro from 'pages/Outro';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="intro" element={<Intro />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="outro" element={<Outro />} />
      </Route>
    </Routes>
  )
}

export default MainRouter