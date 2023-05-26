import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness3Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness3-line"/>
    <div className="Fitness3-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness3-Heading">!!!{d.title3}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness3-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness3-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness3-Boy-Logo"/>
            <p className="Fitness3-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness3-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness3-Social-Media-Logo"/>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Fitness3-Image"/>
        <div className="Fitness3-Image-Name">Image:{d.title3}</div>
        <div className="Fitness3-Para-Container">
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

export default Fitness3Content