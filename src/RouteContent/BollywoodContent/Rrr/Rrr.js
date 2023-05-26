import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  RrrContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Rrr-line"/>
    <div className="Rrr-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Rrr-Heading">!!!{d.title4}!!!</h2>
        <Link to={"/Bollywood"}><button className="Rrr-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Rrr-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Rrr-Boy-Logo"/>
            <p className="Rrr-Dimitry">Dimitry Nozhenko</p>
            <p className="Rrr-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Rrr-Social-Media-Logo"/>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Rrr-Image"/>
        <div className="Rrr-Image-Name">Image:{d.title4}</div>
        <div className="Rrr-Para-Container">
        <p>{d.dpara1}</p>
        <p>{d.dpara2}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default RrrContent