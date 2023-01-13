/* eslint-disable react/react-in-jsx-scope */

import Header from "./Components/Header";
import WhoWeAre from "./Components/WhoWeAre";
import Services from "./Components/ServicesA";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
