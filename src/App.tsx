import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import RelatedLinks from "./layout/RelatedLinks";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-between bg-rocket-mobile bg-cover bg-fixed bg-center bg-no-repeat md:bg-rocket">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <RelatedLinks />
      <Footer />
    </div>
  );
}

export default App;
