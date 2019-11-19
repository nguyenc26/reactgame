import React, { Component } from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";
import FriendCard from "./components/FriendCard";


// import FriendContainer from "./components/FriendContainer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    textClass: "",
    guess: "Click an image to start"
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          textClass={this.state.textClass}>{this.state.guess}</Navbar>
        <Info />
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              shakeClass={this.state.shakeClass}
              onCorrect={() => { this.correct() }}
              onIncorrect={() => { this.incorrect() }}
            />
          ))}
        </div>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
