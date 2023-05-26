import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food2Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food2-line"/>
    <div className="Food2-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food2-Heading">!!!{d.title2}!!!</h3>
        <Link to={"/food"}><button className="Food2-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food2-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food2-Boy-Logo"/>
            <p className="Food2-Dimitry">Dimitry Nozhenko</p>
            <p className="Food2-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food2-Social-Media-Logo"/>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Food2-Image"/>
        <div className="Food2-Image-Name">Image:{d.title2}</div>
        <div className="Food2-Para-Container">
        <p>{d.bpara1}</p>
        <p>{d.bpara2}</p>
        <p>{d.bpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Food2Content