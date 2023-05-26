import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food8Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food8-line"/>
    <div className="Food8-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food8-Heading">!!!{d.title8}!!!</h3>
        <Link to={"/Food"}><button className="Food8-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food8-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food8-Boy-Logo"/>
            <p className="Food8-Dimitry">Dimitry Nozhenko</p>
            <p className="Food8-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food8-Social-Media-Logo"/>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Food8-Image"/>
        <div className="Food8-Image-Name">Image:{d.title8}</div>
        <div className="Food8-Para-Container">
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

export default Food8Content