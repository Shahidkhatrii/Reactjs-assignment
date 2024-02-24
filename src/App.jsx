import Footer from "./components/Footer";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import NavBar from "./components/NavBar";
import RelatedDeals from "./components/RelatedDeals";
import SignUp from "./components/SignUp";
import "./styles/app.scss";

function App() {
  return (
    <>
      <NavBar />

      <div className="main-container">
        <Header />
        <ListContainer />
        <RelatedDeals />
        <SignUp />
      </div>

      <Footer />
    </>
  );
}

export default App;
