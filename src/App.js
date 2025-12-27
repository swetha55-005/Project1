import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Explore } from "./components/Explore";

import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
function App(){
  return(
    <div>
    <Header/>
    <div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Explore' element={<Explore/>}/>
      
      <Route path='/Contact' element={<Contact/>}/>
      

    </Routes>
    </div>
    </div>
  )
}
export default App;