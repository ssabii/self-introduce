import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/layouts/Layout'
import Main from 'pages/Main';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}

export default MainRouter