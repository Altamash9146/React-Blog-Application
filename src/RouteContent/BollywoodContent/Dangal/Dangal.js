import React ,{useContext}from "react";
import "./Dangal.style.css"
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  DangalContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Dangal-line"/>
    <div className="Dangal-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((a,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Dangal-Heading">!!!{a.title1}!!!</h2>
        <Link to={"/Bollywood"}><button className="Dangal-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Dangal-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Dangal-Boy-Logo"/>
            <p className="Dangal-Dimitry">Dimitry Nozhenko</p>
            
            <p className="Dangal-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Dangal-Social-Media-Logo"/>
        </div>
     
        <img src={a.img1} alt="Not-Found" className="Dangal-Image"/>
        <div className="Dangal-Image-Name">Image:{a.title1}</div>
        <div className="Dangal-Para-Container">
        <p>{a.apara1}</p>
        <p>{a.apara2}</p>
        <p>{a.apara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default DangalContent