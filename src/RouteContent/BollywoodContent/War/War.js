import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  WarContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="War-line"/>
    <div className="War-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="War-Heading">!!!{d.title10}!!!</h2>
        <Link to={"/Bollywood"}><button className="War-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="War-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="War-Boy-Logo"/>
            <p className="War-Dimitry">Dimitry Nozhenko</p>
            <p className="War-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="War-Social-Media-Logo"/>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="War-Image"/>
        <div className="War-Image-Name">Image:{d.title10}</div>
        <div className="War-Para-Container">
        <p>{d.jpara1}</p>
        <p>{d.jpara2}</p>
        <p>{d.jpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default WarContent