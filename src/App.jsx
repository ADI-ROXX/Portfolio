
import { BrowserRouter } from "react-router-dom"

import {About,Contact,Experience,Feedbacks,Hero,Tech,Works,Navbar,StarsCanvas} from "./components/"
import "./contact.css"
function App() {

  return (
    <BrowserRouter>


      <div className="relative z-0  overflow-x-hidden">
        <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover bg-center">
            <Navbar/>
            <Hero/>

          </div>
        <div className="about_back">
          <About/>
          </div>
        <div className="exp_back">
        <Experience/>
        </div>

      <div className="tech_back">
        <Tech/>
        <Works/>
        </div>

      <div className="contact_back">
        <Contact/>
        </div>

      
      </div>

    </BrowserRouter>
  )
}

export default App;
