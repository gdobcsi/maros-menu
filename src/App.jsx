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
  const menuRef = useRef(null);

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
      <div className="App-inner-wrapper">
        <Header />
        <PhoneAndOpeningTime restaurantData={restaurantData} />
        <LanguageSelector
          languages={languages}
          setLanguage={setSelectedLanguage}
          setScrollTrigger={setScrollTrigger}
        />
        <StickyUpButton appRef={appRef} />
        {selectedLanguage && <Menu menu={transformedMenu} menuRef={menuRef} />}
        <Footer restaurantData={restaurantData} />
      </div>
    </div>
  );
}

export default App;
