import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProfessionalLandSurveying from './pages/ProfessionalLandSurveying'
import EngineeringSurvey from './pages/EngineeringSurvey'
import UAVPhotogrammetry from './pages/UAVPhotogrammetry'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/land-surveying" element={<ProfessionalLandSurveying />} />
            <Route path="/services/engineering-survey" element={<EngineeringSurvey />} />
            <Route path="/services/uav-photogrammetry" element={<UAVPhotogrammetry />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
