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
import PhoneAndOpeningTime from "./phonAndOpening/phoneAndOpening";
import LanguageSelector from "./languageSelector/languageSelector";
import Menu from "./menu/menu";
import Footer from "./components/micro&macro/footer/footer";
//
import getLanguageMenu from "./utils/menu/getLanguageMenu";

function App() {
  const appRef = useRef();

  const [appTopRef, setAppTopRef] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    setAppTopRef(appRef);
  }, []);

  // Testing getLanguageMenu modul
  const transformedMenu = getLanguageMenu(selectedLanguage);

  //
  return (
    <div className="App" ref={appRef}>
      <div className="App-inner-wrapper">
        {/* <Navbar /> */}
        <Header selectedLanguage={selectedLanguage} />
        <PhoneAndOpeningTime />
        <LanguageSelector setLanguage={setSelectedLanguage} />
        {selectedLanguage && <Menu menu={transformedMenu} appRef={appTopRef} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
