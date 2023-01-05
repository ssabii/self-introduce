import Layout from 'components/layouts/Layout';
import AboutMe from 'pages/About';
import Experience from 'pages/Experience';
import Info from 'pages/Info';
import Main from 'pages/Main';
import Outro from 'pages/Outro';
import { Route, Routes } from 'react-router-dom';

function MainRouter() {
  return (
    <Routes >
      <Route element={<Layout />}>
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