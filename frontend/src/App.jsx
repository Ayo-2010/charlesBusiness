import Topbar from "./components/Topbar"
import Header from "./components/Header"
import Information from "./components/Information"
import AboutOurCompany from "./components/AboutOurCompany"
import GetAQuote from "./components/GetAQuote"
// import Quotes from "./components/Quotes"
import OurServices from "./components/OurServices"
import Carousel from "./components/Carousel"
import Testimonial from "./components/Testimonial"
import OurTeam from "./components/OurTeam"
import Consultation from "./components/Consultation"
import CompSuccess from "./components/CompSuccess"
import Footer from "./components/Footer"
import Partners from "./components/Partners"

function App() {

  return (
    <div className="wrapper w-full h-screen">
    <Header />
    <Topbar />
    <Carousel />
      <Information />
      <AboutOurCompany />
      <GetAQuote />
  <OurServices />
    <Testimonial />
      <OurTeam />
      <CompSuccess />
      <Consultation />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
