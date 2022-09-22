import Comitted from "layouts/Comitted";
import Hero from "layouts/Hero";
import Membership from "layouts/Membership";
import Navbar from "layouts/Navbar";

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
    </div>
  );
}

export default App;
