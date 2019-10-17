import React from "react";

function Example(props) {
  return (
    <div className="flipContain">
      <div className="flipInner">
        <div className="exampleFront">
          <h3>{props.name}</h3>

          <div
            className="exImg"
            style={{ backgroundImage: `url(${props.image})` }}
          />
          <div className="uselist">
            {props.used.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>
        <div className="exampleBack">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
          <a href={props.url} className="exampleLink">Check out this Project</a>
        </div>
      </div>
    </div>
    //     <div className="flip-box">

    //   <div className="flip-box-inner">
    //     <div className="flip-box-front">
    //       <h2>Front Side</h2>
    //     </div>
    //     <div className="flip-box-back">
    //       <h2>Back Side</h2>
    //     </div>
    //   </div>

    // </div>
  );
}

export default Example;
