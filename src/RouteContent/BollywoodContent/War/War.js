import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./War.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  WarContent = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="War-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="War-Heading">!!!{d.title10}!!!</h2>
        <Link to={"/Bollywood"}><button className="War-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="War-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="War-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="War-Social-Media-Logo"/>
        </div>

        <div className="War-Date-Container">
        <p className="War-Dimitry">Dimitry Nozhenko</p>
        <p className="War-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="War-Image"/>
        <div className="War-Image-Name">Image:{d.title10}</div>
        <div className="War-Para-Container">
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

export default WarContent