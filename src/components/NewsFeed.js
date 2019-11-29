import React, { Component } from 'react';
import NewsFeedItem from "../components/NewsFeedItem";

const divStyle = {
  color: 'blue',
  padding: '1em'
};

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
    return this.state.feed.map((item,i) => <div style={divStyle}><NewsFeedItem key={i} item={item}></NewsFeedItem></div>)
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