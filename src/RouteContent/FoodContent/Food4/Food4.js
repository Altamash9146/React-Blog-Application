import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food4Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food4-line"/>
    <div className="Food4-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food4-Heading">!!!{d.title4}!!!</h3>
        <Link to={"/Food"}><button className="Food4-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food4-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food4-Boy-Logo"/>
            <p className="Food4-Dimitry">Dimitry Nozhenko</p>
            <p className="Food4-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food4-Social-Media-Logo"/>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Food4-Image"/>
        <div className="Food4-Image-Name">Image:{d.title4}</div>
        <div className="Food4-Para-Container">
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

export default Food4Content