import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  SultanContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Sultan-line"/>
    <div className="Sultan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sultan-Heading">!!!Sultan!!!</h2>
        <Link to={"/Bollywood"}><button className="Sultan-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sultan-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Sultan-Boy-Logo"/>
            <p className="Sultan-Dimitry">Dimitry Nozhenko</p>
            <p className="Sultan-Date"> Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Sultan-Social-Media-Logo"/>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Sultan-Image"/>
        <div className="Sultan-Image-Name">Image:Sultan</div>
        <div className="Sultan-Para-Container">
        <p>{d.hpara1}</p>
        <p>{d.hpara2}</p>
        <p>{d.hpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SultanContent