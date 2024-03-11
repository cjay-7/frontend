import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
