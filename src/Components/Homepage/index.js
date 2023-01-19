import React from "react";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import News from "./News";
import Header from "./Header";
import Services from "./ServicesA";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <Services />
      <News />
      <Contact />
      <Footer />
      <Loading />
    </main>
  );
};

export default Home;
