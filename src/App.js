import { createRoot  } from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./SearchParams"
import WrappedDetails from "./Details";
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}> {/* Available for every component in app */}
        <BrowserRouter>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />}/>
            <Route path="/" element={<SearchParams />}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);