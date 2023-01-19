import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import LanguagePicker from "./languagePicker/languagePicker";

import ShowMenu from "./showMenu/showMenu";

function App() {
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
  }, [scrollTo, selectedLanguage]);
  //

  //

  return (
    <div className="App">
      <Header />

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
