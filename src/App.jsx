import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="hero"><HeroSection /></section>
        <section id="feature"><FeatureSection /></section>
        <section id="workflow"><WorkFlow /></section>
        <section id="pricing"><Pricing /></section>
        <section id="testimonial"><Testimonials /></section>
        <section id="footer"><Footer /></section>
      </div>
      
  </>
  )
}

export default App