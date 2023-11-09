import { useRef } from "react";
import { useState, useEffect } from "react";

// importing css
import "./css/variables.css";
import "./css/App.css";
import "./css/_common-classes.css";
// import "./css/res-tablet.css";

//
import Footer from "./footer/footer";
import Header from "./header/header";
import LanguagePicker from "./languagePicker/languagePicker";

import ShowMenu from "./showMenu/showMenu";
// import StickyUpButton from "./stickyUpButton/stickyUpButton";
import OpeningTimes from "./openingTimes/openingTimes";
import PhoneAndOpeningTime from "./phonAndOpening/phoneAndOpening";

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
      {/*       <StickyUpButton />       */}
      <Header selectedLanguage={selectedLanguage} />

      {/* 

    Nyitvatartás

    <OpeningTimes />
    
  */}

      <PhoneAndOpeningTime />

      {/* 

      Nyelv válaszó
      

      <LanguagePicker
        setScrollTo={setScrollTo}
        scrollTo={scrollTo}
        setLanguage={setSelectedLanguage}
        showSelectedMenu={showSelectedMenu}
        setShowSelectedMenu={setShowSelectedMenu}
      />
    */}

      {/*  A választott nyelv alapján a menü 

      {showSelectedMenu && (
        <ShowMenu lang={selectedLanguage} setScrollTo={setScrollTo} />
      )}
*/}

      <Footer />
    </div>
  );
}

export default App;
