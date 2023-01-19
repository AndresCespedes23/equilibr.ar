import React from "react";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import Blog from "./Blog";
import Header from "./Header";
import Services from "./ServicesA";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      <Loading />
    </main>
  );
};

export default Home;
