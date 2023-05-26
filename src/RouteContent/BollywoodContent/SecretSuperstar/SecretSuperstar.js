import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  SecretContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Secret-line"/>
    <div className="Secret-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Secret-Heading">!!!{d.title5}!!!</h2>
        <Link to={"/Bollywood"}><button className="Secret-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Secret-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Secret-Boy-Logo"/>
            <p className="Secret-Dimitry">Dimitry Nozhenko</p>
            <p className="Secret-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Secret-Social-Media-Logo"/>
        </div>
     
        <img src={d.img5} alt="Not-Found" className="Secret-Image"/>
        <div className="Secret-Image-Name">Image:{d.title5}</div>
        <div className="Secret-Para-Container">
        <p>{d.epara1}</p>
        <p>{d.epara2}</p>
        <p>{d.epara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SecretContent