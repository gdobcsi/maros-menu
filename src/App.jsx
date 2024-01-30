import { useRef } from "react";
import { useState, useEffect } from "react";

// importing css
import "./css/variables.css";
import "./css/App.css";
import "./css/_common-classes.css";
import "./css/res-tablet.css";
import "./css/res-small-screens.css";
import "./css/res-large-screens.css";

//
// import Footer from "./components/";
import Header from "./header/header";
import LanguagePicker from "./languagePicker/languagePicker";
import Footer from "./components/micro&macro/footer/footer";

import ShowMenu from "./showMenu/showMenu";
import StickyUpButton from "./stickyUpButton/stickyUpButton";
// import OpeningTimes from "./openingTimes/openingTimes";
import PhoneAndOpeningTime from "./phonAndOpening/phoneAndOpening";

function App() {
  const appRef = useRef();

  const [appTopRef, setAppTopRef] = useState(null);
  const [scrollTo, setScrollTo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const [showSelectedMenu, setShowSelectedMenu] = useState(false);

  useEffect(() => {
    setAppTopRef(appRef);
    // console.log("appTopRef", appTopRef);
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
      {/* Header Part */}

      <Header selectedLanguage={selectedLanguage} />

      {/* Nyitvatartás
        <OpeningTimes />
      */}

      <PhoneAndOpeningTime />

      {/* Nyelv válaszó */}

      <LanguagePicker
        setScrollTo={setScrollTo}
        scrollTo={scrollTo}
        setLanguage={setSelectedLanguage}
        showSelectedMenu={showSelectedMenu}
        setShowSelectedMenu={setShowSelectedMenu}
      />
      {/* <StickyUpButton /> */}

      {/*  A választott nyelv alapján a menü */}

      {showSelectedMenu && (
        <ShowMenu
          lang={selectedLanguage}
          setScrollTo={setScrollTo}
          appRef={appTopRef}
        />
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
