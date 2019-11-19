import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="" onClick={() => {
      props.handleClick(props.id)
    }} clicked={props.clicked}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
