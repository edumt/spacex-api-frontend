import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import RelatedLinks from "./layout/RelatedLinks";
import Home from "./pages/Home";
import LastLaunch from "./pages/LastLaunch";
import NextLaunch from "./pages/NextLaunch";
import PastLaunches from "./pages/PastLaunches";
import UpcomingLaunches from "./pages/UpcomingLaunches";

function App() {
  return (
    <div className="flex flex-col justify-between bg-rocket-mobile bg-cover bg-fixed bg-center bg-no-repeat md:bg-rocket">
      <Header />
      <Routes>
        <Route path="/next" element={<NextLaunch />} />
        <Route path="/last" element={<LastLaunch />} />
        <Route path="/upcoming" element={<UpcomingLaunches />} />
        <Route path="/past" element={<PastLaunches />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <RelatedLinks />
      <Footer />
    </div>
  );
}

export default App;
