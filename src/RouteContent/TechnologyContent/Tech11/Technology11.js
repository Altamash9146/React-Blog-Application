import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech11Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech11-line"/>
    <div className="Tech11-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Tech11-Heading">!!!{d.title11}!!!</h3>
        <Link to={"/Technology"}><button className="Tech11-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech11-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech11-Boy-Logo"/>
            <p className="Tech11-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech11-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech11-Social-Media-Logo"/>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Tech11-Image"/>
        <div className="Tech11-Image-Name">Image:{d.title11}</div>
        <div className="Tech11-Para-Container">
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

export default Tech11Content