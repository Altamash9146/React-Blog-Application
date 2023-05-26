import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech3Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech3-line"/>
    <div className="Tech3-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Tech3-Heading">!!!{d.title3}!!!</h3>
        <Link to={"/Technology"}><button className="Tech3-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech3-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech3-Boy-Logo"/>
            <p className="Tech3-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech3-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech3-Social-Media-Logo"/>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Tech3-Image"/>
        <div className="Tech3-Image-Name">Image:{d.title3}</div>
        <div className="Tech3-Para-Container">
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

export default Tech3Content