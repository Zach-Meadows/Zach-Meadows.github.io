import React from 'react'

function Example(props){
  
    return(
        <div className="example"> 
            <a href={props.url}/>
            <h3>{props.name}</h3>
            <div className="exImg" style={{backgroundImage: `url(${props.image})`}}/>
            <p>{props.info}</p>
        </div>
    )
}


export default Example