import React from 'react'
import { Link } from 'react-router-dom'
function Cards(props){
  return (<>
  <li>
    <Link to={props.url}className="card">
      <img src={props.link?props.link:"https://i.imgur.com/oYiTqum.jpg"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://akns-images.eonline.com/eol_images/Entire_Site/20111115/1024.6spider.ls.121511.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{props.name?props.name:"KUCH TO HOGA MOVIE KA NAAM"}</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </Link>      
  </li>

  </>
  )
}
export default Cards