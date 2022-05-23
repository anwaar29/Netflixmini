import React from 'react'
import Cards from '../Component/cards'
import data from '../Resources/Data'
export default function Home() {
  return (
    <>
    <h1 style={{textAlign:'center',color:'black',paddingTop:'10px'}}>🆓TOP ACTION MOVIES FOR FREE🆓</h1>
<ul className="cards">
{
data.map((val)=>{
return <Cards name={val.name}   link={val.img_link} url={val.movie_link}/>

})
}


</ul>
    </>
  )
}
