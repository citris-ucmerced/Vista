import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ReactDOM from 'react-dom';

import Home from "./pages/Home.js";
import People from "./pages/People.js";
import ContactUs from "./pages/ContactUs.js"
import Location from "./pages/Location.js"
import Events from "./pages/Events.js";
import EventDetails from "./pages/EventDetails.js";
import News from "./pages/News.js";
import NotFound from "./pages/NotFound.js";
import NewsDetail from "./components/NewsDetail.js";
import FarmRoboticsChallenge from "./pages/FarmBotChallenge.js";


import "./global.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contactus" element={<ContactUs />} />
            {/* <Route path="/Mission" element={<Mission />} /> */}
            <Route path="/people" element={<People />} />
            <Route path="/location" element={<Location />} />
            <Route path="/farmbotchallenge" element={<FarmRoboticsChallenge />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Events/:slug" component={<EventDetails/>} />
            <Route path="/News" element={<News />} />
            <Route path="/News/:slug" element={<NewsDetail />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
