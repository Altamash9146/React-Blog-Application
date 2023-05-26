import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness9Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness9-line"/>
    <div className="Fitness9-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness9-Heading">!!!{d.title9}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness9-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness9-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness9-Boy-Logo"/>
            <p className="Fitness9-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness9-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness9-Social-Media-Logo"/>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Fitness9-Image"/>
        <div className="Fitness9-Image-Name">Image:{d.title9}</div>
        <div className="Fitness9-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness9Content