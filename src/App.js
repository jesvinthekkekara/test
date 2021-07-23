import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./TopHeader";
import Header from "./Header";
import BottomHeader from "./BottomHeader";
import Contents from "./Contents";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <BottomHeader />
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
