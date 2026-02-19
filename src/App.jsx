import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Companies from "./sections/Companies"
import Services from "./sections/Services"
import CallToAction from "./sections/CallToAction"

function App() {

  return (
    <div className="font-sans">
    <NavBar />
    <Hero />
    <Companies />
    <Services />
    <CallToAction />
    </div>
  )
}

export default App
