
import Pagination from "../../components/pagination/Pagination";
import Filter from "../../components/filters/Filter";
import { useState } from "react";





const Home = () => {
  
const [currentPage, setCurrentPage]= useState(0);
 


  return (
    <div>
   <Filter/>
   <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
          
          
         
      
      
    </div>
  );
};

export default Home;
