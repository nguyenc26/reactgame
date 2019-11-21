import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="col-md-3 pb-4" onClick={() => {      
      props.handleClick(props.id)
    }} clicked={props.clicked}>
      <div className="img-container" id={props.id} key={props.id}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
