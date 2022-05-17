import Header from "./Header/Header";
import Footer from "./footer/Footer";
import "./App.css";
import Main from "./Main/Main";
import Sidbar from "./Saidbar/Sidbar";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidbar />
      <Footer />
    </div>
  );
}

export default App;
