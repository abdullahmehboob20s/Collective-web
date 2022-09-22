import CarefullyDesigned from "layouts/CarefullyDesigned";
import Comitted from "layouts/Comitted";
import Evolving from "layouts/Evolving";
import Hero from "layouts/Hero";
import Membership from "layouts/Membership";
import Navbar from "layouts/Navbar";
import OurSpaces from "layouts/OurSpaces";
import Partners from "layouts/Partners";
import Tokenomics from "layouts/Tokenomics";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-50px">
        <Hero />
      </div>
      <div className="mb-150px">
        <Comitted />
      </div>
      <div className="mb-150px">
        <Membership />
      </div>
      <div className="mb-150px">
        <CarefullyDesigned />
      </div>
      <div className="mb-150px">
        <OurSpaces />
      </div>
      <div className="mb-150px">
        <Evolving />
      </div>
      <div className="mb-150px">
        <Partners />
      </div>
      <div className="mb-150px">
        <Tokenomics />
      </div>
    </div>
  );
}

export default App;
