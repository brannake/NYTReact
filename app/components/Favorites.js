import React, { Component } from "react";
import Panel from "./common/Panel";
import API from "../utils/API";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // Binding getQuotes to this component since we'll be passing this method to 
    // other components to use
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes once the component has mounted
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      const favoriteArticles = res.data.filter(article => article.favorited);
      this.setState({ articles: favoriteArticles });
    });
  }
  // A helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.articles.map(article => (
      <Panel
        article={article}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Your Favorite Articles</h1>
          <p>Your very best articles.</p>
        </div>
        <div className="container">
        <div className="row">
          {this.renderQuotes()}
        </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
