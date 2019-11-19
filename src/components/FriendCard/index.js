import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
      <div className="img-container hover14">
        <img
          className="img"
          alt={props.name}
          src={props.image}
        />
      </div>

   


  );
}

export default FriendCard;
