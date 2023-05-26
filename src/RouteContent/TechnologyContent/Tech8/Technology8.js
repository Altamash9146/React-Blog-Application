import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech8Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech8-line"/>
    <div className="Tech8-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech8-Heading">!!!{d.title8}!!!</h2>
        <Link to={"/Technology"}><button className="Tech8-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech8-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech8-Boy-Logo"/>
            <p className="Tech8-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech8-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech8-Social-Media-Logo"/>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Tech8-Image"/>
        <div className="Tech8-Image-Name">Image:{d.title8}</div>
        <div className="Tech8-Para-Container">
        <p>{d.hpara1}</p>
        <p>{d.hpara2}</p>
        <p>{d.hpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Tech8Content