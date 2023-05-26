import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food10Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Food10-line"/>
    <div className="Food10-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Food10-Heading">!!!{d.title10}!!!</h3>
        <Link to={"/Food"}><button className="Food10-Back-Button">Let's Explore More Food</button></Link> 
        <div className="Food10-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Food10-Boy-Logo"/>
            <p className="Food10-Dimitry">Dimitry Nozhenko</p>
            <p className="Food10-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Food10-Social-Media-Logo"/>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="Food10-Image"/>
        <div className="Food10-Image-Name">Image:{d.title10}</div>
        <div className="Food10-Para-Container">
        <p>{d.jpara1}</p>
        <p>{d.jpara2}</p>
        <p>{d.jpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Food10Content