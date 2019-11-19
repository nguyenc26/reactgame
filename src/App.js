import React, { Component } from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";

// import FriendContainer from "./components/FriendContainer";
import FriendCard from "./components/FriendCard";



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
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
