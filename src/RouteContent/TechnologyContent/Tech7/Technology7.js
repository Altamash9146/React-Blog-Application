import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech7Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech7-line"/>
    <div className="Tech7-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech7-Heading">!!!{d.title7}!!!</h2>
        <Link to={"/Technology"}><button className="Tech7-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech7-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech7-Boy-Logo"/>
            <p className="Tech7-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech7-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech7-Social-Media-Logo"/>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Tech7-Image"/>
        <div className="Tech7-Image-Name">Image:{d.title7}</div>
        <div className="Tech7-Para-Container">
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

export default Tech7Content