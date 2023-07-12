import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Home from "./pages/Home.js";
import People from "./pages/People.js";
import ContactUs from "./pages/ContactUs.js"
import Location from "./pages/Location.js"
import NotFound from "./pages/NotFound.js";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="/People" element={<People />} />
            <Route path="/Location" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
