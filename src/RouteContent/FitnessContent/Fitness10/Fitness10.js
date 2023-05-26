import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness10Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness10-line"/>
    <div className="Fitness10-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness10-Heading">!!!{d.title10}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness10-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness10-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness10-Boy-Logo"/>
            <p className="Fitness10-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness10-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness10-Social-Media-Logo"/>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="Fitness10-Image"/>
        <div className="Fitness10-Image-Name">Image:{d.title10}</div>
        <div className="Fitness10-Para-Container">
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

export default Fitness10Content