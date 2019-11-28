import React, { Component } from 'react';
import NewsFeedItem from "../components/NewsFeedItem";

class App extends Component {
  state = {
    feed: [],
  }

  componentDidMount() {
    console.log("****Fetching******")
    let url = 'https://malibuapp.herokuapp.com/api/newsfeed';
    fetch(url).
    then(response => response.json()).then((r) => {
      console.log(r);
      this.setState({
        feed: r
      });
    });
  };
  

  renderItems(){
    return this.state.feed.map((item,i) => <NewsFeedItem key={i} description={item.description} title={item.title}></NewsFeedItem>)
  } 

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default App;