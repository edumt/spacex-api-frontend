import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-between bg-rocket-mobile md:bg-rocket bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
