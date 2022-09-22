import Comitted from "layouts/Comitted";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-4vw">
        <Hero />
      </div>
      <div className="mb-6vw">
        <Comitted />
      </div>
    </div>
  );
}

export default App;
