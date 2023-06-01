import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Sanju.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  SanjuContent = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Sanju-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sanju-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sanju-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sanju-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Sanju-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Sanju-Social-Media-Logo"/>
        </div>

        <div className="Sanju-Date-Container">
        <p className="Sanju-Dimitry">Dimitry Nozhenko</p>
        <p className="Sanju-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Sanju-Image"/>
        <div className="Sanju-Image-Name">Image:{d.title9}</div>
        <div className="Sanju-Para-Container">
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

export default SanjuContent