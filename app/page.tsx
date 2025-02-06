import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import PerformanceGraph from "./components/PerformanceGraph"
import VideoShowcase from "./components/VideoShowcase"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import FAQ from "./components/FAQ"
import Newsletter from "./components/Newsletter"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PerformanceGraph />
        <VideoShowcase />
        <Testimonials />
        <About />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

