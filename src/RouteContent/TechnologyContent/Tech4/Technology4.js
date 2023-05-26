import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech4Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech4-line"/>
    <div className="Tech4-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech4-Heading">!!!{d.title4}!!!</h2>
        <Link to={"/Technology"}><button className="Tech4-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech4-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech4-Boy-Logo"/>
            <p className="Tech4-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech4-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech4-Social-Media-Logo"/>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Tech4-Image"/>
        <div className="Tech4-Image-Name">Image:{d.title4}</div>
        <div className="Tech4-Para-Container">
        <p>{d.dpara2}</p>
        <p>{d.dpara1}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Tech4Content