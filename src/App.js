import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavPage from "./Components/HomePage/NavPage";
import GoldRings from "./Components/GoldOrnaments/GoldRings";
import GoldBangles from "./Components/GoldOrnaments/GoldBangles";
import GoldChains from "./Components/GoldOrnaments/GoldChains";
import GoldLongHaram from "./Components/GoldOrnaments/GoldLongHaram";
import GoldChokar from "./Components/GoldOrnaments/GoldChokar";
import GoldBridalSet from "./Components/GoldOrnaments/GoldBridalSet";
import DiamondChokar from "./Components/DiamondOrnaments/DiamondChokar";
import DiamondSimpleChokar from "./Components/DiamondOrnaments/DiamondSimpleChokar";
import DiamondRings from "./Components/DiamondOrnaments/DiamondRings";
import DiamondBangles from "./Components/DiamondOrnaments/DiamondBangles";
import DiamondLongHaram from "./Components/DiamondOrnaments/DiamondLongHaram";
import DiamondBridalSet from "./Components/DiamondOrnaments/DiamondBridalSet";
import DiamondEarrings from "./Components/DiamondOrnaments/DiamondEarrings";
import GoldEarrings from "./Components/GoldOrnaments/GoldEarrings";
import DiamondChains from "./Components/DiamondOrnaments/DiamondChains";
import GoldAnticDesigns from "./Components/GoldOrnaments/GoldAnticDesigns";
import SomeMore from "./Components/GoldOrnaments/SomeMore";
import MobileNav from "./Components/HomePage/MobileNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavPage />
                <HomePage />
              </>
            }
          />
          <Route
            path="/gold-rings"
            element={
              <>
                <NavPage />
                <GoldRings />
              </>
            }
          />
          <Route
            path="/gold-earrings"
            element={
              <>
                <NavPage />
                <GoldEarrings />
              </>
            }
          />
          <Route
            path="/gold-chains"
            element={
              <>
                <NavPage />
                <GoldChains /> 
              </>
            }
          />
           <Route
            path="/gold-bangles"
            element={
              <>
                <NavPage />
                <GoldBangles />
              </>
            }
          />
          <Route
            path="/gold-long-haram"
            element={
              <>
                <NavPage />
                <GoldLongHaram />
              </>
            }
          />
          <Route
            path="/gold-antic-long-haram"
            element={
              <>
                <NavPage />
                <GoldAnticDesigns />
              </>
            }
          />
          <Route
            path="/gold-chokars"
            element={
              <>
                <NavPage />
                <GoldChokar />
              </>
            }
          />
          <Route
            path="/gold-bridal-set"
            element={
              <>
                <NavPage />
                <GoldBridalSet />
              </>
            }
          />
          <Route
            path="/diamond-rings"
            element={
              <>
                <NavPage />
                <DiamondRings />
              </>
            }
          />
          <Route
            path="/diamond-earrings"
            element={
              <>
                <NavPage />
                <DiamondEarrings />
              </>
            }
          />
           <Route
            path="/diamond-chains"
            element={
              <>
                <NavPage />
                <DiamondChains />
              </>
            }
          />
          <Route
            path="/diamond-bangles"
            element={
              <>
                <NavPage />
                <DiamondBangles />
              </>
            }
          />
          <Route
            path="/diamond-long-haram"
            element={
              <>
                <NavPage />
                <DiamondLongHaram />
              </>
            }
          />
          <Route
            path="/diamond-chokar"
            element={
              <>
                <NavPage />
                <DiamondChokar />
              </>
            }
          />
          <Route
            path="/diamond-simple-chokar"
            element={
              <>
                <NavPage />
                <DiamondSimpleChokar />
              </>
            }
          />
          <Route
            path="/diamond-bridal-set"
            element={
              <>
                <NavPage />
                <DiamondBridalSet />
              </>
            }
          />
          <Route
            path="/some-more"
            element={
              <>
                <NavPage />
                <SomeMore />
              </>
            }
          />
          <Route
            path="/mobile"
            element={
             <MobileNav />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
