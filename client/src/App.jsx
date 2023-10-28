import {Home, Detail, Form, Landing} from "./views"
import {Routes, Route, useLocation} from "react-router-dom"
import NavBar from "./components/nav/NavBar";




function App() {

  const{pathname}= useLocation();

return (
    <div>
      
      {pathname !== "/" &&  <NavBar />}
<Routes>
           <Route exact path="/" element={<Landing />} />
           <Route path="/home" element={<Home />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/form" element={<Form />} />
         
</Routes>


      
    </div>
  );
}

export default App;
