import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import banner from './images/store_banner.png';
import prd1 from './images/product1.png';
import prd2 from './images/product2.png';
import prd3 from './images/product3.png';
import prd4 from './images/product4.png';
import Footer from './footer';

const img_size = {
  width:"50%",
  height: "50%"
};

function App() {
  return (
    <div className="App">
      <img src={banner} height={520}></img>
      <div style={{justifyItems:"flex", display:"inline-flex"}}>
        <img src={prd1} style={img_size}></img>
        <img src={prd2} style={img_size}></img>
        <img src={prd3} style={img_size}></img>
        <img src={prd4} style={img_size}></img>        
      </div>
      <nav class="navbar navbar-expand-lg" style={{backgroundColor:"pink"}}>
        <div style={{display:"flex"}}>
            <a class="navbar-brand" style={{color:"red", fontSize:"20px", fontWeight:"500", marginLeft:"650px"}} href="#">Step into style, Virtually</a> 
        </div>
      </nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
