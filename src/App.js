import HeadingAndTitle from "components/HeadingAndTitle";
import CarefullyDesigned from "layouts/CarefullyDesigned";
import Comitted from "layouts/Comitted";
import Evolving from "layouts/Evolving";
import Gallery from "layouts/Gallery";
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
      <div className="mb-150px">
        <div className="container-wrapper">
          <HeadingAndTitle
            reverse={true}
            heading={
              <>
                Whilst we can tell you our space was designed carefully, to
                bring the best balance of living and productivity,{" "}
                <span className="text-blue">
                  it is much easier to simply show you{" "}
                </span>
                .{" "}
              </>
            }
            title={
              <>
                We know not all work happens the same, sometime you need a space
                to collaborate, other times a desk is completely appropriate, no
                one always needs the same.{" "}
              </>
            }
          />
        </div>
      </div>

      <div className="mb-150px">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
