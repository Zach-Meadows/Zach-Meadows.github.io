import React from "react";

function Example(props) {
  return (
    <a href={props.url}>
      <div className="example">
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
        <p>{props.info}</p>
      </div>
    </a>
  );
}

export default Example;
