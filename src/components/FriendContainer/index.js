import React, { Component } from "react";
import FriendCard from "../FriendCard";
import friends from "../../friends.json";


class FriendContainer extends Component {
  state = {
    friends: friends,
    guessed: new Set(),
    shuffledArr: []
  }
  
  componentDidMount() {
    this.shuffle()
  }

  shuffleArr = arr => {
    return arr.sort(() => Math.random() - 0.5);
  }

  shuffle () {
    this.setState({shuffledArr: this.shuffleArr(this.state.friends)});
  }

  checkGuess = (friendID) => {
    this.shuffle();
    if(this.state.guessed.has(friendID)) {
      this.setState({guessed: new Set()}, () => {
        this.props.onIncorrect();
      });
      
      return
    }
    this.state.guessed.add(friendID);

    this.props.onCorrect();
  }
  
  render() {
    return (
      <div className={`container ${this.props.shakeClass}`}>
       
          <div className="col-sm col-12">
            {this.state.shuffledArr.map(friend => <FriendCard name={friend.name} key={friend.id} id={friend.id} image={friend.image} handleClick={this.checkGuess}/>)}
         
        </div>
      </div>    
    );
  }
}

export default FriendContainer;