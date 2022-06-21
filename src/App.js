import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css"
import SharedLayout from './Components/SharedLayout'
import Home from './Components/Home'
import Shop from './Components/Shop'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
        <Route index  element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
