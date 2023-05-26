import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  RobotContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Robot-line"/>
    <div className="Robot-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Robot-Heading">!!!{d.title7}!!!</h2>
        <Link to={"/Bollywood"}><button className="Robot-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Robot-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Robot-Boy-Logo"/>
            <p className="Robot-Dimitry">Dimitry Nozhenko</p>
            <p className="Robot-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Robot-Social-Media-Logo"/>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Robot-Image"/>
        <div className="Robot-Image-Name">Image:Robot {d.title7}</div>
        <div className="Robot-Para-Container">
        <p>{d.gpara1}</p>
        <p>{d.gpara2}</p>
        <p>{d.gpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default RobotContent