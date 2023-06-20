import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs.js"
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
