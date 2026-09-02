import { useRef } from "react";
import { useState, useEffect } from "react";

import "./css/variables.css";
import "./css/App.css";
import "./css/_common-classes.css";
import "./css/res-tablet.css";
import "./css/res-small-screens.css";
import "./css/res-large-screens.css";

//
import Header from "./header/header";
import LanguageSelector from "./languageSelector/languageSelector";
import Footer from "./components/micro&macro/footer/footer";

import Menu from "./menu/menu";
import PhoneAndOpeningTime from "./phonAndOpening/phoneAndOpening";
// import Navbar from "./components/micro&macro/navbar/navbar";

function App() {
  const appRef = useRef();

  const [appTopRef, setAppTopRef] = useState(null);
  const [scrollTo, setScrollTo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const [showSelectedMenu, setShowSelectedMenu] = useState(false);

  useEffect(() => {
    setAppTopRef(appRef);
  }, []);

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
      <div className="App-inner-wrapper">
        {/* <Navbar /> */}
        <Header selectedLanguage={selectedLanguage} />
        <PhoneAndOpeningTime />
        <LanguageSelector
          setScrollTo={setScrollTo}
          scrollTo={scrollTo}
          setLanguage={setSelectedLanguage}
          showSelectedMenu={showSelectedMenu}
          setShowSelectedMenu={setShowSelectedMenu}
        />
        {showSelectedMenu && (
          <Menu
            lang={selectedLanguage}
            setScrollTo={setScrollTo}
            appRef={appTopRef}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
