import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Bahubali.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  BahubaliContent = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Bahubali-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Bahubali-Heading">!!!{d.title2}!!!</h2>
        <Link to={"/Bollywood"}><button className="Bahubali-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Bahubali-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Bahubali-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Bahubali-Social-Media-Logo"/>
        </div>

        <div className="Bahubali-Date-Container">
        <p className="Bahubali-Dimitry">Dimitry Nozhenko</p>
        <p className="Bahubali-Date">Jan 28 2019 10 min read</p>
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