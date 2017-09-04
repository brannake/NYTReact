import React, { Component } from "react";
import API from "../../utils/API";

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      TopicinputValue: "",
      StartYearinputValue: "",
      EndYearinputValue: "",
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleTopicInputChange = this.handleTopicInputChange.bind(this);
    this.handleStartYearInputChange = this.handleStartYearInputChange.bind(this);
    this.handleEndYearInputChange = this.handleEndYearInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleTopicInputChange(event) {
    this.setState({ TopicinputValue: event.target.value });
  }
  handleStartYearInputChange(event) {
    this.setState({ StartYearinputValue: event.target.value });
  }
  handleEndYearInputChange(event) {
    this.setState({ EndYearinputValue: event.target.value });
  }

  NYTAPICall(searchObject) {
    let topic = searchObject.TopicinputValue;
    let startYear = searchObject.StartYearinputValue;
    let endYear = searchObject.EndYearinputValue;

    var authKey = "aa7ca2b60183476e8cfcf2c932d2936d";
    // Based on the queryTerm we will create a queryURL 
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
    
    // Array to hold the various article info
    var articleCounter = 0;

      // The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
      $.ajax({url: queryURLBase, method: "GET"}) 
        .done(function(NYTData) {
    
          // Here we are logging the URL so we have access to it for troubleshooting
          console.log("------------------------------------")
          console.log("URL: " + queryURLBase);
          console.log("------------------------------------")
    
          // Here we then log the NYTData to console, where it will show up as an object.
          console.log(NYTData);
          console.log("------------------------------------")
        }
        )}

  handleButtonClick() {
    const searchArticle = this.state;
    this.NYTAPICall(searchArticle);
    this.setState({ TopicinputValue: "",
                    StartYearinputValue: "",
                    EndYearinputValue: "",
                  });
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            Add a quote
          </label>
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleTopicInputChange}
            value={this.state.TopicinputValue}
            placeholder="Topic"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleStartYearInputChange}
            value={this.state.StartYearinputValue}
            placeholder="Start Year"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleEndYearInputChange}
            value={this.state.EndYearinputValue}
            placeholder="End Year"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default QuoteForm;