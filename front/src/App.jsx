import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact.jsx";
import AboutShort from "./components/AboutShort.jsx";

function App() {
  return (
    <div className="flex flex-col bg-plain-bg">
        <Home />
        <AboutShort />
        <About />
        <Contact />
    </div>
  )
}

export default App
