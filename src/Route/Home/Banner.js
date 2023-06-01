import React, { useContext }  from "react";
import Store from "../../Utility/ContextStore/ContextApi";
import { Link } from "react-router-dom";

const Banner = () =>{
    const [data] = useContext(Store)
    return(
        <div className="Banner-Container">
      
{data.filter((item)=>item.cat ==="Hollywood-Images").map((d,item)=>{
    return(
        <div key={item}>
        <Link to={"/HollywoodContent/Movie7"} className='Link-Text'><img src={d.img7} 
         className="Banner-Img-1" alt="Not-Found"/></Link>

        <div className="Banner-Img-Text">
        <div >
            <h2>THE FLASH OFFICIAL TRAILER 2</h2>
            <p>Travel/August 21 2017</p>
        </div> 
        </div>
      </div>
    )
})}
       
       {data.filter((item)=>item.cat ==="Technology-Images").map((d,item)=>{
    return(
      
        <div key={item}> 
        <Link to={"/TechnologyContent/Tech6"} className='Link-Text'><img src={d.img6}
         className="Banner-Img-2" alt="Not-Found"/></Link>

        <div className="Banner-Img2-Text">
        <h4>I hope that you’ll still  <div>want to read my stuff</div></h4>
        <p>Travel/August 21 2017</p>
        </div> 

        <Link to={"/TechnologyContent/Tech7"} className='Link-Text'><img src={d.img7}
         className="Banner-Img-3" alt="Not-Found"/></Link>
    
        <div className="Banner-Img3-Text">
               <h4>My dream of never<div>having to drive again is</div></h4> 
               <p>Travel/August 21 2017</p>
        </div> 

        </div>
    
    )
})}
       
        </div>
    )
}

export default Banner