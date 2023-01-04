import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layouts/Layout'
import Main from 'pages/Main';
import Info from 'pages/Info';
import Experience from 'pages/Experience';
import AboutMe from 'pages/About';
import Outro from 'pages/Outro';
import { routePrefix } from './routePrefix';

function MainRouter() {
  return (
    <Routes>
      <Route path={routePrefix} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="info" element={<Info />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="outro" element={<Outro />} />
      </Route>
    </Routes>
  )
}

export default MainRouter