import TopHome from "./Components/TopHome";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {

  const [animePage, setAnimePage] = useState([]);
  const [toggleAnime, setToggleAnime] = useState(false)

  return (
    <>
      <div className="min-h-screen w-full relative ">
        {/* Azure Depths */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
          }}
        />

        
        <Navbar setAnimePage={setAnimePage} setToggleAnime={setToggleAnime}/>

        <div className="relative z-30">
          <TopHome />          
          <Home animePage={animePage}   toggleAnime={toggleAnime}/> 
          <Footer />    
        </div>

      </div>
    </>
  )
}

export default App
