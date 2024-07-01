import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Mission />
      <Contact />
      <GetStarted />
      <p>Whereas recognition of the inherent dignity</p>
    </div>
  );
}

export default App;
