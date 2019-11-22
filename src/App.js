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
    guess: "Click an image to start",
    shuffleArr: [],
    guessed: new Set()
  };

  //have functions in here and call them here
  componentDidMount() {
    this.shuffle();
  }

  shuffleArr = arr => {
    return arr.sort(() => Math.random() - 0.5);
  }

  shuffle() {
    this.setState({ shuffleArr: this.shuffleArr(this.state.friends) });
  }

  checkGuess = (friendID) => {
    this.shuffle();
    if (this.state.guessed.has(friendID)) {
      this.setState({ guessed: new Set() }, () => {
        this.setState({ score: 0, guess: "Wrong guess! Start over!" });
      });

      return
    }
    this.state.guessed.add(friendID);
    let score = this.state.score +1;

    if (score > this.state.topScore) {
      this.setState({ score: score, topScore: score, guess: "High Score! Keep going!" });
    } else {
      this.setState({ score: score, guess: "Correct!" });
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        >{this.state.guess}</Navbar>
        <Info />
        <div className="container text-center">
          <div className="row">
            {this.state.shuffleArr.map(friend => (
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                handleClick={this.checkGuess}
                onCorrect={() => { this.correct() }}
                onIncorrect={() => { this.incorrect() }}
              />
            ))}
          </div>
        </div>

        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;