import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie9Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Movie9-line"/>
    <div className="Movie9-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Movie9-Heading">!!!{d.title9}!!!</h3>
        <Link to={"/Hollywood"}><button className="Movie9-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie9-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Movie9-Boy-Logo"/>
            <p className="Movie9-Dimitry">Dimitry Nozhenko</p>
            <p className="Movie9-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Movie9-Social-Media-Logo"/>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Movie9-Image"/>
        <div className="Movie9-Image-Name">Image:{d.title9}</div>
        <div className="Movie9-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie9Content