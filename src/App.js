// import logo from './logo.svg';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Datamovie from './component/DataAxious/Datamovie';
//  import DataMoveRou from './component/DataAxious/DataMovieRou';
 import Search from './Searchfunctionlity/Search';

import Firstscreen from './component/Firstscreen/Firstscreen';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Productlist from './Searchfunctionlity/productlist';
import Productdetail from './Searchfunctionlity/Productdetail';

function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Datamovie/>}/>
      <Route path="/datamovie/:id" element={<DataMoveRou/>} /> 

     </Routes>  */}
      <Routes>
      <Route path="/" element={<Productlist/>}/>
      <Route path="/Productdetail/:id" element={<Productdetail/>} /> 

     </Routes> 
     {/* <Search/> */}
    {/* <Navbar/> 

    <Datamovie/>
    <Home/>
     <Firstscreen/> */}


    </>
  );
}

export default App;
