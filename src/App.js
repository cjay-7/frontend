import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*Common Components*/
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

/*Screens*/
import HomeScreen from "./screens/HomeScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import OurFabricsScreen from "./screens/OurFabricsScreen";

/*FontAwesome*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faPhone, faEnvelope, faLocationDot);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomeScreen />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUsScreen />}
            />
            <Route
              path="/OurFabrics"
              element={<OurFabricsScreen />}
            />
            <Route
              path="/ContactUs"
              element={<ContactUsScreen />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
