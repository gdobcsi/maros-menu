import { useRef } from "react";
import { useState } from "react";

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
import StickyUpButton from "./stickyUpButton/stickyUpButton";
//
import getLanguageMenu from "./utils/menu/getLanguageMenu";

function App() {
  const appRef = useRef();

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Testing getLanguageMenu modul
  const transformedMenu = getLanguageMenu(selectedLanguage);

  //
  return (
    <div className="App" ref={appRef}>
      <div className="App-inner-wrapper">
        {/* <Navbar /> */}
        <Header />
        <PhoneAndOpeningTime />
        <LanguageSelector setLanguage={setSelectedLanguage} />
        <StickyUpButton appRef={appRef} />
        {selectedLanguage && <Menu menu={transformedMenu} appRef={appRef} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
