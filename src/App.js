import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "./Nav";
import "./App.scss";

function App() {
  return (
    <ParallaxProvider>
      <Nav />
    </ParallaxProvider>
  );
}

export default App;
