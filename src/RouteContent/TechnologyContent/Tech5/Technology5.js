import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech5Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech5-line"/>
    <div className="Tech5-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Tech5-Heading">!!!{d.title5}!!!</h3>
        <Link to={"/Technology"}><button className="Tech5-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech5-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech5-Boy-Logo"/>
            <p className="Tech5-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech5-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech5-Social-Media-Logo"/>
        </div>
     
        <img src={d.img5} alt="Not-Found" className="Tech5-Image"/>
        <div className="Tech5-Image-Name">Image:{d.title5}</div>
        <div className="Tech5-Para-Container">
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

export default Tech5Content