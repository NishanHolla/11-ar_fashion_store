import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import banner from './image/store_banner.jpg';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img src={banner} height={1020}></img>
    </div>
  );
}

export default App;
