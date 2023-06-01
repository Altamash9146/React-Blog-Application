import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Sultan.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  SultanContent = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Sultan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sultan-Heading">!!!{d.title8}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sultan-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sultan-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Sultan-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Sultan-Social-Media-Logo"/>
        </div>

        <div className="Sultan-Date-Container">
        <p className="Sultan-Dimitry">Dimitry Nozhenko</p>
        <p className="Sultan-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Sultan-Image"/>
        <div className="Sultan-Image-Name">Image:{d.title8}</div>
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