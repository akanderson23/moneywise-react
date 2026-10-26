import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import About from './pages/About'
import Pricing from './pages/Pricing'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course" element={<Course />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
