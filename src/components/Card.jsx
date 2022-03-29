import React from "react";
import Avatar from "./Avatar";

export default function Card(props) {
  return (
    <div>
      <div class="card info">
        <div class="top">
          <h2 class="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
