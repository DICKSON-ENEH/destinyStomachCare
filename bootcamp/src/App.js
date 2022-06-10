import Header from './componenets/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./componenets/Body/Home"
import CreateRice from './componenets/createproduct/CreateRice'
const  App=() =>{
  return (
   <BrowserRouter>
     <Header/>

   <Routes>
<Route path= "/" element ={<Home/>}/>
<Route path ="/createrice" element={<CreateRice/>}/>
   </Routes>

   </BrowserRouter>
  
  );
}

export default App;
