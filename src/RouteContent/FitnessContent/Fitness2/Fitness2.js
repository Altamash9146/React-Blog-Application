import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness2Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness2-line"/>
    <div className="Fitness2-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Fitness2-Heading">!!!{d.title2}!!!</h3>
        <Link to={"/Fitness"}><button className="Fitness2-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness2-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Fitness2-Boy-Logo"/>
            <p className="Fitness2-Dimitry">Dimitry Nozhenko</p>
            <p className="Fitness2-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Fitness2-Social-Media-Logo"/>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Fitness2-Image"/>
        <div className="Fitness2-Image-Name">Image:{d.title2}</div>
        <div className="Fitness2-Para-Container">
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

export default Fitness2Content