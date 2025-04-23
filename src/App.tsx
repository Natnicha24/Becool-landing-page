import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Rating from "./components/Rating";
import Project from "./components/Project";
import Service from "./components/Services";
import ProjectView from "./components/ProjectView";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div
      className="w-full">
      <Nav />
      <Header />
      <Rating />
      <Project />
      <Service />
      <ProjectView />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
