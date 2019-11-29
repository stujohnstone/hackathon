import React, { Component } from 'react';
import NewsFeedItem from "../components/NewsFeedItem";

class NewsFeed extends Component {
  state = {
    feed: [],
  }

  componentDidMount() {
    console.log("****Fetching******")
    let url = 'https://malibuapp.herokuapp.com/api/messages';
    fetch(url).
    then(response => response.json()).then((r) => {
      console.log(r);
      this.setState({
        feed: r
      });
    });
  };
  

  renderItems(){
    return this.state.feed.map((item,i) => <NewsFeedItem key={i} event_category={item.event_category} aircraft={item.aircraft}></NewsFeedItem>)
  } 

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default NewsFeed;