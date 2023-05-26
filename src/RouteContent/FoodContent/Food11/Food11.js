import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food11Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food11-line"/>
    <div className="Food11-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food11-Heading">!!!{d.title11}!!!</h3>
        <Link to={"/Food"}><button className="Food11-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food11-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food11-Boy-Logo"/>
            <p className="Food11-Dimitry">Dimitry Nozhenko</p>
            <p className="Food11-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food11-Social-Media-Logo"/>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Food11-Image"/>
        <div className="Food11-Image-Name">Image:{d.title11}</div>
        <div className="Food11-Para-Container">
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

export default Food11Content