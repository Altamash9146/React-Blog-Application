import React, { useContext } from 'react'
import Store from '../../Utility/ContextStore/ContextApi';
import { Link } from 'react-router-dom';

const HollywoodTopPost = () => {
  const [data] = useContext(Store)
  return (
   <>
      <div className="Hollywood-Top-Post-Container">
    <h2><span  className="Hollywood-Top-Post-Heading">Top</span> Post</h2>


{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,index)=>{
return(
<div key={index}>
<div>
<div>
<Link to={"/HollywoodContent/Movie8"} className='Link-Text'><img src={d.img8} alt='Not-Found' className="Hollywood-Top-post-Image-2"/></Link>
<Link to={"/HollywoodContent/Movie8"} className='Link-Text'> <h4 className="Hollywood-Top-Post-Image-Name">{d.title8}</h4></Link>

  <div>
 <div className="Hollywood-Top-Post-Image-Container">
 <Link to={"/HollywoodContent/Movie9"} className='Link-Text'><img src={d.img9}
  alt="Not-Found" className="Hollywood-Top-Post-Image"/></Link>
  <Link to={"/HollywoodContent/Movie10"} className='Link-Text'><img src={d.img10}
  alt="Not-Found" className="Hollywood-Top-Post-Image"/></Link>
  <Link to={"/HollywoodContent/Movie11"} className='Link-Text'><img src={d.img11}
  alt="Not-Found" className="Hollywood-Top-Post-Image"/></Link>
     </div>

  <div className="Hollywood-Top-Post-Data-Container"  >

<div >
<Link to={"/HollywoodContent/Movie9"} className='Link-Text'><h5>{d.title9}</h5></Link>
</div>
<br/> 

<div>
<Link to={"/HollywoodContent/Movie10"} className='Link-Text'><h5>{d.title10}</h5></Link>
</div>   
<br/>

<div>
<Link to={"/HollywoodContent/Movie11"} className='Link-Text'><h5>{d.title11}</h5></Link>
</div>
</div>

<div className="Hollywood-Top-Post-Number-Container">
        <h1 className="Number">1</h1>
        <br/>
        <h1  className="Number">2</h1>
        <br/> 
        <h1  className="Number" >3</h1>
        <br/><br/> 
        <h1  className="Number">4</h1>

</div>
</div>
</div>
</div>

<div className="Hollywood-Advertisement-Container">
        <h4>Advertisement</h4>
  </div>

</div>

)
})}












    </div>
    {/* <div className="Hollywood-Advertisement-Container">
        <h4>Advertisement</h4>
         </div> */}

    </>
  )
}

export default  HollywoodTopPost