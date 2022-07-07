import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router,Route ,Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
// import ProductReviews from "./components/ProductReviews.js"
// import Videos from "./components/Videos.js"
// import Banner from "./components/Banner.js"
// import Footer from "./components/Footer.js"
// import NavOptios from "./components/NavOptios.js"



function App() {

  return (
  <Router>
       <PreNavbar/>
       <Navbar />
            
        {/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/> */}


       <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu />
        <Routes>
       <Route exact path="/music">
       {/* <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  /> */}
       </Route>
       </Routes>

       
   
    </Router>
  );
}

export default App;
