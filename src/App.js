import Header from "./Header";
import "./App.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}
