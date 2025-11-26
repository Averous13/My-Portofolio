import Header from "./components/Header"
import Hero from "./components/Hero"
import "./app.css"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Toaster } from "sonner"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  )
}

export default App
