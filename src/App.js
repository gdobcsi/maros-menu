import { useRef } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import LanguagePicker from "./languagePicker/languagePicker";

import ShowMenu from "./showMenu/showMenu";
import StickyUpButton from "./stickyUpButton/stickyUpButton";

function App() {
  const appRef = useRef();

  const [scrollTo, setScrollTo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const [showSelectedMenu, setShowSelectedMenu] = useState(false);

  useEffect(() => {
    if (scrollTo !== null) {
      scrollTo.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollTo]);

  useEffect(() => {
    console.log(appRef.current.clientHeight);
  }, [scrollTo, selectedLanguage]);

  //

  return (
    <div className="App" ref={appRef}>
      <StickyUpButton />
      <Header selectedLanguage={selectedLanguage} />

      <LanguagePicker
        setScrollTo={setScrollTo}
        scrollTo={scrollTo}
        setLanguage={setSelectedLanguage}
        showSelectedMenu={showSelectedMenu}
        setShowSelectedMenu={setShowSelectedMenu}
      />
      {showSelectedMenu && (
        <ShowMenu lang={selectedLanguage} setScrollTo={setScrollTo} />
      )}

      <Footer />
    </div>
  );
}

export default App;
