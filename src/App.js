import { createRoot  } from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./SearchParams"
import WrappedDetails from "./Details";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<WrappedDetails />}/>
          <Route path="/" element={<SearchParams />}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);