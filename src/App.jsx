import { useEffect, useRef, useState } from "react";

import "./css/variables.css";
import "./css/App.css";
import "./css/responsive.css";

import restaurantData from "./data/restaurant.json";
import languages from "./data/languages.json";

import Header from "./components/Header/Header";
import PhoneAndOpeningTime from "./compositions/PhoneAndOpening/PhoneAndOpening";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Menu from "./components/Menu/Menu";
import Footer from "./compositions/Footer/Footer";
import StickyUpButton from "./components/StickyUpButton/StickyUpButton";
import getLanguageMenu from "./utils/menu/getLanguageMenu";

function App() {
  const appRef = useRef(null);
  const contentRef = useRef(null);
  const menuRef = useRef(null);
  const footerRef = useRef(null);

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [scrollTrigger, setScrollTrigger] = useState(0);

  useEffect(() => {
    if (menuRef.current !== null)
      menuRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [scrollTrigger]);

  const transformedMenu = getLanguageMenu(selectedLanguage);

  return (
    <div ref={appRef}>
      <div className="App-wrapper">
        <div className="App-content" ref={contentRef}>
          <Header />
          <div className="top-controls">
            <PhoneAndOpeningTime
              phone={restaurantData.phone}
              openingTimes={restaurantData.openingTimes}
            />
            <LanguageSelector
              languages={languages}
              selectedLanguage={selectedLanguage}
              setLanguage={setSelectedLanguage}
              setScrollTrigger={setScrollTrigger}
            />
          </div>
          {selectedLanguage && (
            <Menu menu={transformedMenu} menuRef={menuRef} />
          )}
          {selectedLanguage && (
            <StickyUpButton
              appRef={appRef}
              contentRef={contentRef}
              footerRef={footerRef}
            />
          )}
        </div>

        <Footer
          footerRef={footerRef}
          facebookUrl={restaurantData.socialMedia.fb}
          phone={restaurantData.phone}
          address={restaurantData.address}
          openingTimes={restaurantData.openingTimes}
          googleMapsUrl={restaurantData.googleMaps.embedUrl}
        />
      </div>
    </div>
  );
}

export default App;
