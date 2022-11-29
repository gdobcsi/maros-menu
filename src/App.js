import { useState } from "react";
import "./App.css";
import Header from "./header/header";
import LanguagePicker from "./languagePicker/languagePicker";

import ShowMenu from "./showMenu/showMenu";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  // console.log("Lang =", selectedLanguage);

  return (
    <div className="App">
      <Header />

      <LanguagePicker setLanguage={setSelectedLanguage} />

      <ShowMenu lang={selectedLanguage} />
    </div>
  );
}

export default App;
