import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Info from "./components/Info";




class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Info />
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>







    );
  }
}

export default App;
