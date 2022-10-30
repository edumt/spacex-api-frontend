import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col justify-between bg-rocket-mobile bg-cover bg-fixed bg-center bg-no-repeat md:bg-rocket">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
