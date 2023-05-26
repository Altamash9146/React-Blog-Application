import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness5Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness5-line"/>
    <div className="Fitness5-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness5-Heading">!!!{d.title5}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness5-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness5-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness5-Boy-Logo"/>
            <p className="Fitness5-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness5-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness5-Social-Media-Logo"/>
        </div>
     
        <img src={d.img5} alt="Not-Found" className="Fitness5-Image"/>
        <div className="Fitness5-Image-Name">Image:{d.title5}</div>
        <div className="Fitness5-Para-Container">
        <p>{d.epara1}</p>
        <p>{d.epara2}</p>
        <p>{d.epara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness5Content