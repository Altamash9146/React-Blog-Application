import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  BahubaliContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Bahubali-line"/>
    <div className="Bahubali-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Bahubali-Heading">!!!{d.title2}!!!</h2>
        <Link to={"/Bollywood"}><button className="Bahubali-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Bahubali-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Bahubali-Boy-Logo"/>
            <p className="Bahubali-Dimitry">Dimitry Nozhenko</p>
            <p className="Bahubali-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Bahubali-Social-Media-Logo"/>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Bahubali-Image"/>
        <div className="Bahubali-Image-Name">Image:{d.title2}</div>
        <div className="Bahubali-Para-Container">
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

export default BahubaliContent