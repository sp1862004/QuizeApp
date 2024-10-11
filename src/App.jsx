import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import QuizList from './pages/QuizList'
import QuizPage from './pages/QuizPage'
import ScorePage from './pages/ScorePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"  element ={<QuizList />} />
          <Route path="/quiz/:id" element ={<QuizPage />} />
          <Route path="/score" element ={<ScorePage />} />
          <Route path="/about" element ={<AboutPage />} />
          <Route path="/contact" element ={<ContactPage />} />
          <Route path="/login" element ={<LoginPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
