import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  KgfContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Kgf-line"/>
    <div className="Kgf-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Kgf-Heading">!!!{d.title3}!!!</h2>
        <Link to={"/Bollywood"}><button className="Kgf-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Kgf-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Kgf-Boy-Logo"/>
            <p className="Kgf-Dimitry">Dimitry Nozhenko</p>
            <p className="Kgf-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Kgf-Social-Media-Logo"/>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Kgf-Image"/>
        <div className="Kgf-Image-Name">Image:{d.title3}</div>
        <div className="Kgf-Para-Container">
        <p>{d.cpara1}</p>
        <p>{d.cpara2}</p>
        <p>{d.cpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default KgfContent