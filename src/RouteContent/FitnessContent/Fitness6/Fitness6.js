import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness6Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness6-line"/>
    <div className="Fitness6-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness6-Heading">!!!{d.title6}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness6-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness6-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness6-Boy-Logo"/>
            <p className="Fitness6-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness6-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness6-Social-Media-Logo"/>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Fitness6-Image"/>
        <div className="Fitness6-Image-Name">Image:{d.title6}</div>
        <div className="Fitness6-Para-Container">
        <p>{d.fpara1}</p>
        <p>{d.fpara2}</p>
        <p>{d.fpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness6Content