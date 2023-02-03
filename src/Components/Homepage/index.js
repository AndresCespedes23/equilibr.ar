import React from "react";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import News from "./News";
import Header from "./Header";
import Services from "./ServicesA";
import WhoWeAre from "./WhoWeAre";
// import Loading from "../Shared/Loading";

const Home = () => {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <Services />
      <News />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
