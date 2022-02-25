import "./App.scss";
import { useState } from "react";

// Components
import Header from "./components/Header/Header";
import MainMovie from "./components/MainMovie/MainMovie";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const handleDarkMode = () => {
    theme === "" ? setTheme("dark") : setTheme("");
  };
  return (
    <div className="App" data-theme={theme}>
      <Header changeDark={handleDarkMode} />
      <MainMovie />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
