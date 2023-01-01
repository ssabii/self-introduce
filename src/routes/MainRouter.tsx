import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layouts/Layout'
import Main from 'pages/Main';
import Intro from 'pages/Intro';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="intro" element={<Intro />} />
      </Route>
    </Routes>
  )
}

export default MainRouter