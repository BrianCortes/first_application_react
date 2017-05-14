import React, { Component } from 'react';
import UserProfile from './components/UserProfile/UserProfile'
import Heart from './components/Heart/Heart'
import Comments from './components/Comments/Comments'
import './App.css';

class App extends Component {
  state = {
    LikesNumber: 0,
    ComentsNumber: 0,
    Comments: [{
      value: 'React is Awesome !!'
    }]
  }

  handleClick = () => {
    const likes = this.state.LikesNumber
    this.setState({LikesNumber: likes + 1})
  }
  render() {
    return (
      <div className="Container">
        <UserProfile 
          img='https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
          Name='Monoku'
          Likes={this.state.LikesNumber}
          Comments={this.state.ComentsNumber}
        />
        <Heart clickHeart={this.handleClick}/>
        <Comments comments={this.state.Comments}/>
      </div>
    );
  }
}

export default App;
