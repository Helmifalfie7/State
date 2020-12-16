import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Emma Stone",
        bio: ` is an American actress. The recipient of several accolades, including an Academy Award,
         a British Academy Film Award, and a Golden Globe Award, she was the world's highest-paid actress in 2017.
          Stone appeared in Forbes Celebrity 100 in 2013 and in 2017, she was named by Time magazine as one of the 100 most influential people in the world.`,
        image: "/image/emma.jpg",
        profession: "American actress",
      },
      show: false,
      time: new Date().toLocaleString,
    };
  }

  hundleClick = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.tick(),1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };
  tick = () => {
    this.setState({
      time: new Date().toLocaleString(),
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.show === true ? (
          <div className="sho">
            
            <h1>{this.state.Person.fullName}</h1>
            <img className="image" src={this.state.Person.image} alt="logo" />
            
            <h1>{this.state.Person.profession}</h1>
            <div className="divbio">
              <p>{this.state.Person.bio}</p>
            </div>
            <p className="App-clock">The time is {this.state.time}.</p>
          </div>
        ) : (
          <div></div>
        )}

        <button className="btn" onClick={this.hundleClick}>
          
        {this.state.show === true ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
