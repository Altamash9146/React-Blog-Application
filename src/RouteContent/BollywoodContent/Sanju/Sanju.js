import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  SanjuContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Sanju-line"/>
    <div className="Sanju-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sanju-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sanju-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sanju-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Sanju-Boy-Logo"/>
            <p className="Sanju-Dimitry">Dimitry Nozhenko</p>
            <p className="Sanju-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Sanju-Social-Media-Logo"/>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Sanju-Image"/>
        <div className="Sanju-Image-Name">Image:{d.title9}</div>
        <div className="Sanju-Para-Container">
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

export default SanjuContent