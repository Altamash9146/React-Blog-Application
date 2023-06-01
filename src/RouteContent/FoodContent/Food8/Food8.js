import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food8.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  Food8Content = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Food8-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food8-Heading">!!!{d.title8}!!!</h2>
        <Link to={"/Food"}><button className="Food8-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food8-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food8-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food8-Social-Media-Logo"/>
        </div>

        <div className="Food8-Date-Container">
        <p className="Food8-Dimitry">Dimitry Nozhenko</p>
        <p className="Food8-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Food8-Image"/>
        <div className="Food8-Image-Name">Image:{d.title8}</div>
        <div className="Food8-Para-Container">
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

export default Food8Content