import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness11Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness11-line"/>
    <div className="Fitness11-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness11-Heading">!!!{d.title11}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness11-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness11-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness11-Boy-Logo"/>
            <p className="Fitness11-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness11-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness11-Social-Media-Logo"/>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Fitness11-Image"/>
        <div className="Fitness11-Image-Name">Image:{d.title11}</div>
        <div className="Fitness11-Para-Container">
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

export default Fitness11Content