import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  SahooContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Sahoo-line"/>
    <div className="Sahoo-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sahoo-Heading">!!!{d.title11}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sahoo-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sahoo-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Sahoo-Boy-Logo"/>
            <p className="Sahoo-Dimitry">Dimitry Nozhenko</p>
            <p className="Sahoo-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Sahoo-Social-Media-Logo"/>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Sahoo-Image"/>
        <div className="Sahoo-Image-Name">Image:{d.title11}</div>
        <div className="Sahoo-Para-Container">
        <p>{d.kpara1}</p>
        <p>{d.kpara2}</p>
        <p>{d.kpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SahooContent