import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food7Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food7-line"/>
    <div className="Food7-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food7-Heading">!!!{d.title1}!!!</h3>
        <Link to={"/Food"}><button className="Food7-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food7-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food7-Boy-Logo"/>
            <p className="Food7-Dimitry">Dimitry Nozhenko</p>
            <p className="Food7-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food7-Social-Media-Logo"/>
        </div>
     
        <img src={d.img1} alt="Not-Found" className="Food7-Image"/>
        <div className="Food7-Image-Name">Image:{d.title1}</div>
        <div className="Food7-Para-Container">
        <p>{d.apara1}</p>
        <p>{d.apara2}</p>
        <p>{d.apara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Food7Content